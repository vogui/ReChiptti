import React,{ useEffect} from 'react';
import { WebView } from 'react-native-webview';
import { ViewHeader } from '../components/ViewHeader';

export function WebScreen({navigation:{setOptions},route:{params:{url,title}}}) {

  useEffect(()=>{
    setOptions({header:(props)=><ViewHeader {...props} title={title}/>})
  },[])

  return (
    <WebView 
      source={{ uri: url }}
    />
  );
}