import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, ScrollView} from 'react-native';


export default function App(){
const [img1, setImg1] = useState('https://s.aficionados.com.br/imagens/edna-moda.jpg')
const [img2, setImg2] = useState('http://pm1.narvii.com/6900/117b6a74a18d67d3c1887c8d136b87d1bc74fdfcr1-339-401v2_00.jpg')
const [img3, setImg3] = useState('https://epipoca.com.br/wp-content/uploads/2021/07/Sindrome-em-Os-Incriveis-Reproducao-1200x900.jpg')

    return(

      <View>

        <Text style={styles.titulo}>

          Anúncios

        </Text>

        <ScrollView horizontal={true} style={styles.scroll} showsHorizontalScrollIndicator={true}>

          <View style={styles.anuncio}>

             <Image

              source={{ uri: img1 }}

              style={styles.imagem}

            />

            <Text style={styles.descricao}>Contrata-se estilista.</Text>

          </View>

          <View style={styles.anuncio}>

             <Image

              source={{ uri: img2 }}

              style={styles.imagem}

            />

            <Text style={styles.descricao}>Contrata-se mímico.</Text>

          </View>

          <View style={styles.anuncio}>

             <Image

              source={{ uri: img3 }}

              style={styles.imagem}

            />

            <Text style={styles.descricao}>Vende-se manopla de raios.</Text>

          </View>

        </ScrollView>

      </View>

    )

  }


const styles = StyleSheet.create({

  titulo:{

    color: '#FF0000',

    fontSize: 25,

    margin: 15,

    alignSelf: 'center'

  },

  imagem:{

    height: 200,

    width: 200,

    marginRight: 10

  },

  descricao: {

    marginLeft: 10,

  },

  anuncio: {

    marginLeft: 20,

    borderWidth: 1

  },

  scroll:{

    borderWidth: 1

  }

})

