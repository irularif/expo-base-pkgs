const fetch = require('node-fetch');

async function sendDiscordNotification() {
  const webhookUrl = process.env.EXPO_PUBLIC_DISCORD_WEBHOOK_URL;
  const buildStatus = process.env.EAS_BUILD_STATUS || 'finished';
  const buildUrl = process.env.EAS_BUILD_URL || process.env.EXPO_BUILD_URL;
  const buildProfile = process.env.EAS_BUILD_PROFILE || 'unknown';
  const platform = process.env.EAS_BUILD_PLATFORM || 'unknown';
  const appVersion = process.env.EAS_BUILD_APP_VERSION || 'unknown';

  // Generate message based on build status
  let message;

  switch (buildStatus) {
    case 'finished':
      message = {
        embeds: [
          {
            title: '✅ Build Succeeded!',
            description: `Build completed successfully for **${platform}** platform`,
            color: 3066993, // Green
            fields: [
              { name: 'Profile', value: buildProfile, inline: true },
              { name: 'Platform', value: platform, inline: true },
              { name: 'Version', value: appVersion, inline: true },
            ],
            url: buildUrl,
            footer: { text: 'Expo EAS Build' },
            timestamp: new Date().toISOString(),
          },
        ],
      };
      break;
    case 'errored':
      message = {
        embeds: [
          {
            title: '❌ Build Failed!',
            description: `Build failed for **${platform}** platform`,
            color: 15158332, // Red
            fields: [
              { name: 'Profile', value: buildProfile, inline: true },
              { name: 'Platform', value: platform, inline: true },
              { name: 'Version', value: appVersion, inline: true },
            ],
            url: buildUrl,
            footer: { text: 'Expo EAS Build' },
            timestamp: new Date().toISOString(),
          },
        ],
      };
      break;
    case 'canceled':
      message = {
        embeds: [
          {
            title: '⚠️ Build Canceled',
            description: `Build was canceled for **${platform}** platform`,
            color: 16776960, // Yellow
            fields: [
              { name: 'Profile', value: buildProfile, inline: true },
              { name: 'Platform', value: platform, inline: true },
              { name: 'Version', value: appVersion, inline: true },
            ],
            url: buildUrl,
            footer: { text: 'Expo EAS Build' },
            timestamp: new Date().toISOString(),
          },
        ],
      };
      break;
    default:
      message = {
        content: `Build status: ${buildStatus} for ${platform} (${buildProfile}). Check it out: ${buildUrl}`,
      };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (response.ok) {
      console.log(
        `Discord notification sent successfully for ${buildStatus} build!`
      );
    } else {
      console.error(
        `Failed to send Discord notification for ${buildStatus} build:`,
        response.status,
        response.statusText
      );
    }
  } catch (error) {
    console.error('Error sending Discord notification:', error);
  }
}

sendDiscordNotification();
