import React from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import { styles } from './styles';

export function HomeWhatsApp() {
 
  const conversas = [
    { id: '1', nome: 'Mario Praun (Você)', msg: 'Foto', tempo: '13:57', img: require('../../../assets/mario.png'), tipo: 'foto' },
    { id: '2', nome: '❤️ Amorzinho ❤️', msg: 'Vou ver se eles tem cabo para cá', tempo: '13:39', img: require('../../../assets/jess.png'), tipo: 'texto_enviado' },
    { id: '3', nome: 'Grupo 5 React', msg: 'Você: Qual tela vcs vão clonar?...', tempo: '13:49', img: require('../../../assets/grupo.png'), tipo: 'grupo' },
    { id: '4', nome: 'Rafael 😃', msg: 'Mensagem de voz (00:05)', tempo: '14:57', img: require('../../../assets/rafael.png'), tipo: 'audio' },
    { id: '5', nome: 'Avisos - Serratec Residentes', msg: 'Turma 037 > mandei no grupo do', tempo: '13:39', img: require('../../../assets/avisos.png'), tipo: 'normal' },
  ];

  return (
    <View style={styles.container}> /* Requisito obrigatorio: View */

      <View style={styles.header}>
        <Text style={styles.headerText}>WhatsApp</Text> {/* Requisito obrigatorio: Text */}
        <View style={styles.headerIcons}>
          <MaterialIcons name="photo-camera" size={22} color="#ffffff" />
          <Ionicons name="search-outline" size={22} color="#ffffff" />
          <MaterialIcons name="more-vert" size={22} color="#ffffff" />
        </View>
      </View>

      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput}
          placeholder="Pergunte à Meta AI ou pesquise"
          placeholderTextColor="#8696a0"
        />
      </View>

      <View style={styles.filterContainer}>
        <View style={styles.filterBadgeActive}>
          <Text style={styles.filterTextActive}>Todas</Text>
        </View>
        <View style={styles.filterBadge}>
          <Text style={styles.filterText}>Grupos</Text>
        </View>
      </View>

      <ScrollView style={styles.chatList} showsVerticalScrollIndicator={false}>
        {conversas.map((item) => (

          <TouchableOpacity key={item.id} style={styles.chatRow} activeOpacity={0.7}>
            
            <Image source={item.img} style={styles.avatar} /> {/* Requisito obrigatorio: Image */}
            
            <View style={styles.chatContent}>
              <View style={styles.chatHeader}>
                <Text style={styles.chatName}>{item.nome}</Text>
                <Text style={styles.chatTime}>{item.tempo}</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              
                {item.tipo === 'foto' && (
                  <MaterialIcons name="photo-camera" size={15} color="#8696a0" />
                )}

                {item.tipo === 'texto_enviado' && (
                  <Ionicons name="checkmark-done" size={16} color="#53bdeb" />
                )}

                {item.tipo === 'grupo' && (
                  <Ionicons name="checkmark-done" size={16} color="#8696a0" />
                )}
*/
                {item.tipo === 'audio' && (
                  <MaterialIcons name="mic" size={16} color="#1fa855" />
                )}

                <Text style={styles.chatMessage} numberOfLines={1}>{item.msg}</Text>

                {item.tipo === 'foto' && (
                  <Ionicons name="checkmark-done" size={16} color="#53bdeb" style={{ marginLeft: 'auto' }} />
                )}
              </View>

            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </View>
  );
}