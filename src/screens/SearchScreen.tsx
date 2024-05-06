import { ActivityIndicator, FlatList, View } from 'react-native'
import { TextInput } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Serie } from '../components/Serie';
import { useSearch } from '../hooks/useSearch';

export const SearchScreen = () => {

  const { top } = useSafeAreaInsets();
  const { isLoading, serieList, term, setTerm, notFound } = useSearch();

  return (
    <View style={{ paddingTop: top + 10, marginHorizontal: 20 }} >
      <TextInput
        placeholder='Search TV serie'
        placeholderTextColor='white'
        mode='flat'
        autoFocus
        contentStyle={{ backgroundColor: '#1C1C27', color: 'white' }}
        autoCorrect={false}
        onChangeText={value => setTerm(value)}
        value={term}
        style={{ marginBottom: 20, borderRadius: 20 }}
      />

      {!notFound &&
        <FlatList
          data={serieList}
          renderItem={({ item }) => <Serie serie={item} />}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      }

      {isLoading &&
        <ActivityIndicator style={{ paddingTop: 20 }} color='white' />
      }

    </View>
  )
}
