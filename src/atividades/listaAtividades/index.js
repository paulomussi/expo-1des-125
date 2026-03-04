import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function ListaAtividades() {

    const navigation = useNavigation();

    return (

        <View style={styles.container}>

            <Text style={styles.titulo}>Atividades</Text>

            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => navigation.navigate('Atividade01')} 
            >
                <Text style={styles.textoBtn}>Atividade 1</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => navigation.navigate('Atividade02')}
            >
                <Text style={styles.textoBtn}>Atividade 2</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => navigation.navigate('Atividade03')}
            >
                <Text style={styles.textoBtn}>Atividade 3</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => navigation.navigate('Atividade03')}
            >
                <Text style={styles.textoBtn}>Atividade 4</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => navigation.navigate('Atividade03')}
            >
                <Text style={styles.textoBtn}>Atividade 5</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => navigation.navigate('Atividade03')}
            >
                <Text style={styles.textoBtn}>Atividade 6</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => navigation.navigate('Atividade03')}
            >
                <Text style={styles.textoBtn}>Atividade 7</Text>
            </TouchableOpacity>


        </View>

    );
}
