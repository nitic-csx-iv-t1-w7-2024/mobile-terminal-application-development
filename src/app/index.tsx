import { ollama } from '@/lib/ollama';
import { type ElementRef, useRef, useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

type Utterance = {
  role: 'user' | 'assistant';
  content: string;
};

const RootPage = () => {
  const [content, setContent] = useState('');
  const [conversation, setConversation] = useState<Utterance[]>([]);

  const scrollViewRef = useRef<ElementRef<typeof ScrollView>>(null);

  return (
    <View
      style={{
        height: '100%',
        paddingHorizontal: 12,
        paddingVertical: 32,
      }}
    >
      {conversation.length === 0 ? (
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            fontFamily: 'sans',
            textAlign: 'center',
            color: 'black',
          }}
        >
          こんにちは
        </Text>
      ) : (
        <ScrollView
          ref={scrollViewRef}
          style={{
            margin: 12,
            display: 'flex',
          }}
          contentContainerStyle={{
            rowGap: 12,
          }}
        >
          {conversation.map((utterance, index) => (
            <Text
              key={conversation + index.toString()}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                fontSize: 16,
                fontWeight: 'bold',
                fontFamily: 'sans',
                backgroundColor: utterance.role === 'user' ? 'lightgreen' : 'lightgray',
                borderRadius: 24,
                alignSelf: utterance.role === 'user' ? 'flex-end' : 'flex-start',
              }}
            >
              {utterance.content}
            </Text>
          ))}
        </ScrollView>
      )}
      <View
        style={{
          marginTop: 'auto',
          display: 'flex',
          gap: 8,
        }}
      >
        <TextInput
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            fontFamily: 'sans',
            paddingHorizontal: 20,
            paddingVertical: 10,
            maxHeight: 128,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 999,
          }}
          value={content}
          onChangeText={setContent}
        />
        <TouchableOpacity
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: 'teal',
            borderRadius: 999,
          }}
          onPress={async () => {
            if (!content) {
              return;
            }
            setConversation([...conversation, { role: 'user', content }]);
            setContent('');
            scrollViewRef.current?.scrollToEnd({ animated: true });

            const response = await ollama.chat({
              model: 'llama3.2',
              messages: [...conversation, { role: 'user', content }],
              stream: false,
            });
            setConversation([
              ...conversation,
              { role: 'user', content },
              { role: 'assistant', content: response.message.content },
            ]);
            scrollViewRef.current?.scrollToEnd({ animated: true });
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              fontFamily: 'sans',
              color: 'white',
            }}
          >
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RootPage;
