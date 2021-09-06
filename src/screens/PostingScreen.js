import React from 'react';
import { RefreshControl, SafeAreaView, FlatList } from 'react-native';
import { PostCard } from '../components/PostCard';
import { useGetPosts } from '../hooks/useGetPosts';

export function PostingScreen({route:{name}}) {

  const {posts, refresh, getData} = useGetPosts(name)

  return (<SafeAreaView >
            {
            posts.length > 0 
            && 
            <FlatList 
              data={posts} 
              renderItem={({item:{data}})=> <PostCard data={data}/>} 
              keyExtractor={({data} )=> data.id} 
              refreshControl={
                <RefreshControl 
                  refreshing={refresh}
                  onRefresh={getData}
                />
              }
            />
            }
          </SafeAreaView>
  );
}
