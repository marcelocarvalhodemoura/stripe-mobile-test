import React from 'react';
import { Modal } from 'react-native';

import { WebView } from 'react-native-webview';

export default function CustomWebView({
    ...props
}) {
    return (
        <Modal  visible={props.visible} animationType="fade">
            <WebView
                source={{ uri: props.url }} 
                style={{ flex: 1, paddingTop: 60 }}
                javaScriptEnabled
                onNavigationStateChange={(navState) => {
                    if (navState.url.includes('success')) {
                        props.onSuccess();
                    } else if (navState.url.includes('cancel')) {
                        props.onCancel();
                    }
                }}
            />
        </Modal>
    );
}