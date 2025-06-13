import { queryClient } from '../config/query';
import { IProvider } from '../types/provider';
import NetInfo from '@react-native-community/netinfo';
import { QueryClientProvider, onlineManager } from '@tanstack/react-query';
import React from 'react';

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected);
  });
});

const QueryProvider = ({ children }: IProvider) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
