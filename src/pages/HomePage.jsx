import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Music, Headphones, Disc, Mail, Instagram, Youtube } from 'lucide-react';
import Header from '@/components/Header.jsx';
import ProductCard from '@/components/ProductCard.jsx';
import FAQSection from '@/components/FAQSection.jsx';
import { vsSertanejoPlaylist } from '@/data/vsSertanejoPlaylist.js';

const HomePage = () => {
  const vsPagodeSamples = [
    { videoId: '1i8Eq30L1VM', title: 'VS Pagode - Amostra 1' },
    { videoId: 'wTSXMmNViRA', title: 'VS Pagode - Amostra 2' },
    { videoId: 'f50gKSJcZLE', title: 'VS Pagode - Amostra 3' },
    { videoId: 'KYieJJuah5k', title: 'VS Pagode - Amostra 4' },
    { videoId: 'qsPxoA8tQ0Y', title: 'VS Pagode - Amostra 5' },
    { videoId: '4E1EbNUwxlQ', title: 'VS Pagode - Amostra 6' }
  ];

  const vsSertanejoSamples = [
    { videoId: 'Q9Ji4bTFMMQ', title: 'VS Sertanejo - Amostra' }
  ];

  const loopsPercussaoSamples = [
    { videoId: 'SFDld7aOk80', title: 'Loops Percussão - Amostra' }
  ];

  const vsPagodeFeatures = [
    'Multipistas profissionais em alta qualidade',
    'Compatível com todas as principais DAWs',
    'Ableton Live, FL Studio, Logic Pro',
    'Cubase, Pro Tools, Studio One',
    'Formatos WAV e MIDI inclusos',
    'Suporte e atualizações vitalícias'
  ];

  const vsSertanejoFeatures = [
    'Samples autênticos de sertanejo',
    'Multipistas editáveis',
    'Compatível com todas DAWs principais',
    'Formatos WAV e MIDI',
    'Alta qualidade de áudio',
    'Pronto para produção profissional'
  ];

  const loopsPercussaoFeatures = [
    'Loops de percussão variados',
    'Ideal para complementar suas produções',
    'Formatos WAV de alta qualidade',
    'Compatível com todas as DAWs',
    'BPM ajustável',
    'Uso comercial permitido'
  ];

  const vsPagodeSongs = [
    // MEDLEY
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Adivinha · Fatalmente · Quando a Gente Ama' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: '40 Graus · Gamei · Azul Sem Fim · Até o Sol Quis Ver · A Carta' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'A Gente Tudo a Ver · Camisa 10' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Absoluta · É Tarde Demais' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Agamamou · Gostava Tanto de Você · Descobridor dos Sete Mares' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Ainda Gosto de Você · Coração Deserto · Me Espera' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Assim Você Mata o Papai · Climatizar · Para com Esse Papo' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Bom Bocado · Pimpolho · Fricote' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Bombocado · Pimpolho · Fricote 2' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Bye Bye · Sorria' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Coincidência · Deixa Eu Te Querer' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Combinado · Pura Adrenalina · Vício' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Conselho · Insensato Destino · Coisa de Pele · O Show Tem que Continuar' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Deixa Acontecer · Tchau e Bença · Brilho de Cristal · Me Faz Feliz' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Deixa Acontecer · Tchau e Bença · Brilho de Cristal · Na Cama' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Deixa em Off · Vamo que Vamo' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'É Bom Demais · Out Door' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'É Bom Demais · Out Door · Cheia de Manias' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Especial Pixote · Idem · Frenesi · Nuance' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Especial Raça Negra' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Especial SPC' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Eu Juro · Minha Namorada' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Faz Assim · A Primeira Namorada · Amanhã' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Ferrugem' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Hoje a Noite É Nossa · Me Faz Feliz · Jeito Moleque' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Lancinho · Sou o Cara pra Você · Ousadia e Alegria' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Mais que Amigo · Nuance · Acordar com Você' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Maravilha · Te Amar · Me Faz Feliz' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Mineirinho · Sai da Minha Aba 2 Top' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Mineirinho · Sai da Minha Aba' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Não Pedi pra Me Apaixonar · Toda Noite' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Notificação Preferida · Atrasadinha' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Papo Reto · Uma Brasileira · Reggae Power' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Pé na Areia · Meu Jeito Moleque' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Pente e Rala · Instigante e Climatizar (violão)' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Perfume · Intriga da Oposição · Desse Jeito É Ruim pra Mim · Belo' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Pirata e Tesouro · Anti Amor' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Porradão · Beija Aqui · Puxa Agarra e Beija' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Que Situação · Pela Vida Inteira' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Que Situação · Vergonha na Cara · Bye Bye Inimigos · Tô Te Filmando' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Que Sorte a Nossa · Medo Bobo' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Samba Diferente · Vassoura · Baile do Negro' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Samba Diferente · Molejão' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Segue Sua Vida · Paixão Verdadeira · TDP' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Tá Louco Heim Filha · Curtindo a Vida' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Tchau e Bênção · Falando Segredo · Na Cama' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Te Amar Sem Medo · Meu Jeito de Ser · Alexandre Pires' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Temporal · Mina de Fé' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Valeu · Fui · Calma Amor · Exaltasamba (FVC)' },
    { artist: 'MEDLEY', category: 'MEDLEY', title: 'Valeu · Livre pra Voar' },
    // VERSÃO DE OUTROS ESTILOS
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'A Estrada' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Burguesinha (Versão Pagode)' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Ela É Demais' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Evidências (Versão Pagode)' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Gostava Tanto de Você' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Jennifer (Versão Pagode)' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Libera Ela (Versão Pagode)' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Mal Acostumado' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Marcas do Que Se Foi (Samba)' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Não Tô Valendo Nada (Versão Pagode)' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Natiruts Reggae Power (Grupo do Bola)' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Nocaute' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Notificação Preferida (Versão Pagode)' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'O Sol (Versão Pagode)' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Olha a Explosão (Versão Pagode)' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Os Anjos Cantam (Versão Pagode)' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Ouvi Dizer (Versão Pagode)' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Papo Reto (Grupo do Bola)' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Quem Pegou Pegou (Versão Pagode)' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Reggae Power (Grupo do Bola)' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Senhorita (Versão Pagode)' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Status que Eu Não Queria' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Uma Brasileira 1 Top' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Uma Brasileira 2 (Grupo do Bola)' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Vidinha de Balada (Versão Pagode)' },
    { artist: 'VERSÃO DE OUTROS ESTILOS', category: 'VERSÃO DE OUTROS ESTILOS', title: 'Você Partiu Meu Coração' },
    // ALEXANDRE PIRES
    { artist: 'ALEXANDRE PIRES', category: 'ALEXANDRE PIRES', title: 'Domingo' },
    { artist: 'ALEXANDRE PIRES', category: 'ALEXANDRE PIRES', title: 'Final Feliz' },
    { artist: 'ALEXANDRE PIRES', category: 'ALEXANDRE PIRES', title: 'Que Se Chamar Amor' },
    { artist: 'ALEXANDRE PIRES', category: 'ALEXANDRE PIRES', title: 'Você Virou Saudade' },
    // ART POPULAR
    { artist: 'ART POPULAR', category: 'ART POPULAR', title: 'Agamamou' },
    { artist: 'ART POPULAR', category: 'ART POPULAR', title: 'Pimpolho' },
    // ARLINDO CRUZ
    { artist: 'ARLINDO CRUZ', category: 'ARLINDO CRUZ', title: 'O Meu Lugar' },
    // ATITUDE 67
    { artist: 'ATITUDE 67', category: 'ATITUDE 67', title: 'Cerveja de Garrafa' },
    { artist: 'ATITUDE 67', category: 'ATITUDE 67', title: 'Saideira' },
    // BELO
    { artist: 'BELO', category: 'BELO', title: 'Medley Perfume · Intriga da Oposição · Desse Jeito É Ruim pra Mim' },
    { artist: 'BELO', category: 'BELO', title: 'Para com Esse Papo' },
    // BOKA LOKA
    { artist: 'BOKA LOKA', category: 'BOKA LOKA', title: 'Duas Paixões' },
    // BOM GOSTO
    { artist: 'BOM GOSTO', category: 'BOM GOSTO', title: 'Brigar Não Tá com Nada' },
    { artist: 'BOM GOSTO', category: 'BOM GOSTO', title: 'Curtindo a Vida' },
    { artist: 'BOM GOSTO', category: 'BOM GOSTO', title: 'Patricinha do Olho Azul' },
    // CLAREOU
    { artist: 'CLAREOU', category: 'CLAREOU', title: 'Quando o Sol Nascer' },
    // CLÁUDIA LEITTE
    { artist: 'CLÁUDIA LEITTE', category: 'CLÁUDIA LEITTE', title: 'Cartório' },
    // DDG
    { artist: 'DDG', category: 'DDG', title: 'Trem das Onze' },
    // DI PROPÓSITO
    { artist: 'DI PROPÓSITO', category: 'DI PROPÓSITO', title: 'Manda Áudio' },
    // DILSINHO
    { artist: 'DILSINHO', category: 'DILSINHO', title: '12 Horas' },
    { artist: 'DILSINHO', category: 'DILSINHO', title: 'A Vingança' },
    { artist: 'DILSINHO', category: 'DILSINHO', title: 'Cansei de Farra' },
    { artist: 'DILSINHO', category: 'DILSINHO', title: 'Controle Remoto' },
    { artist: 'DILSINHO', category: 'DILSINHO', title: 'Da Pra Saber' },
    { artist: 'DILSINHO', category: 'DILSINHO', title: 'Deixa pra Amanhã' },
    { artist: 'DILSINHO', category: 'DILSINHO', title: 'Já que Você Não Me Quer Mais' },
    { artist: 'DILSINHO', category: 'DILSINHO', title: 'Maluca Pirada' },
    { artist: 'DILSINHO', category: 'DILSINHO', title: 'Onze e Pouquinho' },
    { artist: 'DILSINHO', category: 'DILSINHO', title: 'Péssimo Negócio' },
    { artist: 'DILSINHO', category: 'DILSINHO', title: 'Pouco a Pouco' },
    { artist: 'DILSINHO', category: 'DILSINHO', title: 'Refém' },
    { artist: 'DILSINHO', category: 'DILSINHO', title: 'Sogra' },
    { artist: 'DILSINHO', category: 'DILSINHO', title: 'Trovão' },
    // DIOGO NOGUEIRA
    { artist: 'DIOGO NOGUEIRA', category: 'DIOGO NOGUEIRA', title: 'Clareou' },
    { artist: 'DIOGO NOGUEIRA', category: 'DIOGO NOGUEIRA', title: 'Pé na Areia' },
    // EXALTASAMBA
    { artist: 'EXALTASAMBA', category: 'EXALTASAMBA', title: 'Livre pra Voar' },
    // FALTA CLICK 85
    { artist: 'FALTA CLICK 85', category: 'FALTA CLICK 85', title: 'Moleque Danado' },
    // FELIPE ARAÚJO
    { artist: 'FELIPE ARAÚJO', category: 'FELIPE ARAÚJO', title: 'Atrasadinha' },
    // FERRUGEM
    { artist: 'FERRUGEM', category: 'FERRUGEM', title: 'Até que Enfim' },
    { artist: 'FERRUGEM', category: 'FERRUGEM', title: 'Chopp Garotinho' },
    { artist: 'FERRUGEM', category: 'FERRUGEM', title: 'Climatizar' },
    { artist: 'FERRUGEM', category: 'FERRUGEM', title: 'Distante do Seu Mundo' },
    { artist: 'FERRUGEM', category: 'FERRUGEM', title: 'É Natural' },
    { artist: 'FERRUGEM', category: 'FERRUGEM', title: 'Ensaboado' },
    { artist: 'FERRUGEM', category: 'FERRUGEM', title: 'Eu Juro' },
    { artist: 'FERRUGEM', category: 'FERRUGEM', title: 'Eu Sou Feliz Assim' },
    { artist: 'FERRUGEM', category: 'FERRUGEM', title: 'Paciência' },
    { artist: 'FERRUGEM', category: 'FERRUGEM', title: 'Pirata e Tesouro' },
    { artist: 'FERRUGEM', category: 'FERRUGEM', title: 'Pra Você Acreditar' },
    { artist: 'FERRUGEM', category: 'FERRUGEM', title: 'Sinto Sua Falta' },
    { artist: 'FERRUGEM', category: 'FERRUGEM', title: 'Som do Tambor' },
    { artist: 'FERRUGEM', category: 'FERRUGEM', title: 'Tá na Cara' },
    { artist: 'FERRUGEM', category: 'FERRUGEM', title: 'Tentei Ser Incrível' },
    // GRUPO PRA VALER
    { artist: 'GRUPO PRA VALER', category: 'GRUPO PRA VALER', title: 'Novas Regras' },
    // GRUPO SEM ABUSO
    { artist: 'GRUPO SEM ABUSO', category: 'GRUPO SEM ABUSO', title: 'Você Vai Lembrar de Mim' },
    // GUGA NANDES
    { artist: 'GUGA NANDES', category: 'GUGA NANDES', title: 'Presentinho' },
    // IMAGINASAMBA
    { artist: 'IMAGINASAMBA', category: 'IMAGINASAMBA', title: 'Pretexto' },
    { artist: 'IMAGINASAMBA', category: 'IMAGINASAMBA', title: 'Retrô' },
    { artist: 'IMAGINASAMBA', category: 'IMAGINASAMBA', title: 'Seja Bem Vinda' },
    // INIMIGOS DA HP
    { artist: 'INIMIGOS DA HP / DO HP', category: 'INIMIGOS DA HP / DO HP', title: 'Toca um Samba Aí' },
    { artist: 'INIMIGOS DA HP / DO HP', category: 'INIMIGOS DA HP / DO HP', title: 'Vergonha na Cara' },
    // JEITO MOLEQUE
    { artist: 'JEITO MOLEQUE', category: 'JEITO MOLEQUE', title: 'Amizade e Tudo' },
    { artist: 'JEITO MOLEQUE', category: 'JEITO MOLEQUE', title: 'Amor Eterno' },
    { artist: 'JEITO MOLEQUE', category: 'JEITO MOLEQUE', title: 'Me Faz Feliz' },
    { artist: 'JEITO MOLEQUE', category: 'JEITO MOLEQUE', title: 'Meu Jeito Moleque de Ser' },
    { artist: 'JEITO MOLEQUE', category: 'JEITO MOLEQUE', title: 'Não Tem pra Ninguém' },
    // JORGE ARAGÃO
    { artist: 'JORGE ARAGÃO', category: 'JORGE ARAGÃO', title: 'Álvara' },
    // KATINGUELE
    { artist: 'KATINGUELE', category: 'KATINGUELE', title: 'No Compasso do Criador' },
    { artist: 'KATINGUELE', category: 'KATINGUELE', title: 'Recado a Minha Amada' },
    // MEU ÉBANO
    { artist: 'MEU ÉBANO', category: 'MEU ÉBANO', title: 'Meu Ébano' },
    // MOLEJO
    { artist: 'MOLEJO', category: 'MOLEJO', title: 'Cilada' },
    { artist: 'MOLEJO', category: 'MOLEJO', title: 'Samba Rock do Molejão' },
    // MUMUZINHO
    { artist: 'MUMUZINHO', category: 'MUMUZINHO', title: 'Curto Circuito' },
    { artist: 'MUMUZINHO', category: 'MUMUZINHO', title: 'Design' },
    { artist: 'MUMUZINHO', category: 'MUMUZINHO', title: 'Estonteante' },
    { artist: 'MUMUZINHO', category: 'MUMUZINHO', title: 'Eu Mereço Ser Feliz' },
    { artist: 'MUMUZINHO', category: 'MUMUZINHO', title: 'Fulminante' },
    { artist: 'MUMUZINHO', category: 'MUMUZINHO', title: 'Playlist' },
    // NEGRITUDE JR
    { artist: 'NEGRITUDE JR', category: 'NEGRITUDE JR', title: 'Beijo Geladinho' },
    { artist: 'NEGRITUDE JR', category: 'NEGRITUDE JR', title: 'Conto de Fadas' },
    { artist: 'NEGRITUDE JR', category: 'NEGRITUDE JR', title: 'Medley Beijo Geladinho · Cohab City' },
    // OBA OBA SAMBA HOUSE
    { artist: 'OBA OBA SAMBA HOUSE', category: 'OBA OBA SAMBA HOUSE', title: 'Pescador de Ilusões' },
    { artist: 'OBA OBA SAMBA HOUSE', category: 'OBA OBA SAMBA HOUSE', title: 'Use Somebody' },
    // OS TRAVESSOS
    { artist: 'OS TRAVESSOS', category: 'OS TRAVESSOS', title: 'Dividido' },
    { artist: 'OS TRAVESSOS', category: 'OS TRAVESSOS', title: 'Maravilha Te Amar' },
    { artist: 'OS TRAVESSOS', category: 'OS TRAVESSOS', title: 'Um Dia pra Nós Dois' },
    // PÉRICLES
    { artist: 'PÉRICLES', category: 'PÉRICLES', title: 'Final de Tarde' },
    { artist: 'PÉRICLES', category: 'PÉRICLES', title: 'Melhor Eu Ir' },
    // PIXOTE
    { artist: 'PIXOTE', category: 'PIXOTE', title: 'Insegurança' },
    { artist: 'PIXOTE', category: 'PIXOTE', title: 'Nem de Graça' },
    // POLLO
    { artist: 'POLLO', category: 'POLLO', title: 'Solta na Noite (part. Sorriso Maroto)' },
    // RAÇA NEGRA
    { artist: 'RAÇA NEGRA', category: 'RAÇA NEGRA', title: 'Cheia de Manias' },
    { artist: 'RAÇA NEGRA', category: 'RAÇA NEGRA', title: 'Cheia de Manias (versão Novela)' },
    { artist: 'RAÇA NEGRA', category: 'RAÇA NEGRA', title: 'Ciúme de Você' },
    { artist: 'RAÇA NEGRA', category: 'RAÇA NEGRA', title: 'Deus Me Livre' },
    { artist: 'RAÇA NEGRA', category: 'RAÇA NEGRA', title: 'É Tarde Demais' },
    // REVELAÇÃO
    { artist: 'REVELAÇÃO', category: 'REVELAÇÃO', title: 'Agora Viu que Me Perdeu' },
    { artist: 'REVELAÇÃO', category: 'REVELAÇÃO', title: 'Deixa Acontecer' },
    { artist: 'REVELAÇÃO', category: 'REVELAÇÃO', title: 'Jogo da Sedução' },
    { artist: 'REVELAÇÃO', category: 'REVELAÇÃO', title: 'Só Vai de Camarote' },
    { artist: 'REVELAÇÃO', category: 'REVELAÇÃO', title: 'Tá Escrito' },
    // RODRIGUINHO
    { artist: 'RODRIGUINHO', category: 'RODRIGUINHO', title: 'Fatalmente' },
    // SAMBO
    { artist: 'SAMBO', category: 'SAMBO', title: 'Pais e Filhos' },
    { artist: 'SAMBO', category: 'SAMBO', title: 'Sunday Bloody Sunday' },
    // SORRISO MAROTO
    { artist: 'SORRISO MAROTO', category: 'SORRISO MAROTO', title: '50 Vezes' },
    { artist: 'SORRISO MAROTO', category: 'SORRISO MAROTO', title: 'Assim Você Mata o Papai' },
    { artist: 'SORRISO MAROTO', category: 'SORRISO MAROTO', title: 'Chave e Cadeado' },
    { artist: 'SORRISO MAROTO', category: 'SORRISO MAROTO', title: 'Conselho de Amigo' },
    { artist: 'SORRISO MAROTO', category: 'SORRISO MAROTO', title: 'Dependente' },
    { artist: 'SORRISO MAROTO', category: 'SORRISO MAROTO', title: 'Escondido dos Seus Pais' },
    { artist: 'SORRISO MAROTO', category: 'SORRISO MAROTO', title: 'Instigante' },
    { artist: 'SORRISO MAROTO', category: 'SORRISO MAROTO', title: 'Lua de Mel' },
    { artist: 'SORRISO MAROTO', category: 'SORRISO MAROTO', title: 'Na Cama' },
    { artist: 'SORRISO MAROTO', category: 'SORRISO MAROTO', title: 'Na Maldade (part. Anitta)' },
    { artist: 'SORRISO MAROTO', category: 'SORRISO MAROTO', title: 'O Impossível' },
    { artist: 'SORRISO MAROTO', category: 'SORRISO MAROTO', title: 'Se Eu Te Pego Eu Te Invergo' },
    { artist: 'SORRISO MAROTO', category: 'SORRISO MAROTO', title: 'Sinais' },
    { artist: 'SORRISO MAROTO', category: 'SORRISO MAROTO', title: 'Tá Bom Ahan' },
    // SOWETO
    { artist: 'SOWETO', category: 'SOWETO', title: 'Mundo de Oz' },
    // SPC
    { artist: 'SPC (SÓ PRA CONTRARIAR)', category: 'SPC (SÓ PRA CONTRARIAR)', title: 'A Minha Fantasia' },
    { artist: 'SPC (SÓ PRA CONTRARIAR)', category: 'SPC (SÓ PRA CONTRARIAR)', title: 'Essa Tal Liberdade' },
    { artist: 'SPC (SÓ PRA CONTRARIAR)', category: 'SPC (SÓ PRA CONTRARIAR)', title: 'Mineirinho' },
    // TDP
    { artist: 'TDP (TURMA DO PAGODE)', category: 'TDP (TURMA DO PAGODE)', title: 'A Pessoa Certa' },
    { artist: 'TDP (TURMA DO PAGODE)', category: 'TDP (TURMA DO PAGODE)', title: 'Beija Aqui' },
    { artist: 'TDP (TURMA DO PAGODE)', category: 'TDP (TURMA DO PAGODE)', title: 'Cobertor de Orelha' },
    { artist: 'TDP (TURMA DO PAGODE)', category: 'TDP (TURMA DO PAGODE)', title: 'Deixa em Off' },
    { artist: 'TDP (TURMA DO PAGODE)', category: 'TDP (TURMA DO PAGODE)', title: 'Final Feliz' },
    { artist: 'TDP (TURMA DO PAGODE)', category: 'TDP (TURMA DO PAGODE)', title: 'Lancinho' },
    { artist: 'TDP (TURMA DO PAGODE)', category: 'TDP (TURMA DO PAGODE)', title: 'Luz, Câmera, Ação' },
    { artist: 'TDP (TURMA DO PAGODE)', category: 'TDP (TURMA DO PAGODE)', title: 'Melhor Amigo' },
    { artist: 'TDP (TURMA DO PAGODE)', category: 'TDP (TURMA DO PAGODE)', title: 'Pente e Rala' },
    { artist: 'TDP (TURMA DO PAGODE)', category: 'TDP (TURMA DO PAGODE)', title: 'Pesquisa no Google' },
    { artist: 'TDP (TURMA DO PAGODE)', category: 'TDP (TURMA DO PAGODE)', title: 'Pro Meu Mundo Girar' },
    { artist: 'TDP (TURMA DO PAGODE)', category: 'TDP (TURMA DO PAGODE)', title: 'Puxa Agarra e Beija' },
    { artist: 'TDP (TURMA DO PAGODE)', category: 'TDP (TURMA DO PAGODE)', title: 'Se Eu Pudesse' },
    { artist: 'TDP (TURMA DO PAGODE)', category: 'TDP (TURMA DO PAGODE)', title: 'Sem Você a Vida É Tão Sem Graça' },
    { artist: 'TDP (TURMA DO PAGODE)', category: 'TDP (TURMA DO PAGODE)', title: 'Sua Mãe Vai Me Amar' },
    // THIAGUINHO
    { artist: 'THIAGUINHO', category: 'THIAGUINHO', title: 'A Fila Anda' },
    { artist: 'THIAGUINHO', category: 'THIAGUINHO', title: 'Buquê de Flores' },
    { artist: 'THIAGUINHO', category: 'THIAGUINHO', title: 'Cancun' },
    { artist: 'THIAGUINHO', category: 'THIAGUINHO', title: 'Caraca Muleque' },
    { artist: 'THIAGUINHO', category: 'THIAGUINHO', title: 'Deixa Tudo Como Tá' },
    { artist: 'THIAGUINHO', category: 'THIAGUINHO', title: 'Desencana' },
    { artist: 'THIAGUINHO', category: 'THIAGUINHO', title: 'Domingando' },
    { artist: 'THIAGUINHO', category: 'THIAGUINHO', title: 'Energia Surreal' },
    { artist: 'THIAGUINHO', category: 'THIAGUINHO', title: 'Flor de Liz' },
    { artist: 'THIAGUINHO', category: 'THIAGUINHO', title: 'Hey Mundo' },
    { artist: 'THIAGUINHO', category: 'THIAGUINHO', title: 'Já Fui de Você' },
    { artist: 'THIAGUINHO', category: 'THIAGUINHO', title: 'Ousadia e Alegria' },
    { artist: 'THIAGUINHO', category: 'THIAGUINHO', title: 'Para pra Pensar (part. Mr Dan)' },
    { artist: 'THIAGUINHO', category: 'THIAGUINHO', title: 'Ponto Fraco' },
    { artist: 'THIAGUINHO', category: 'THIAGUINHO', title: 'Simples Desejo' },
    { artist: 'THIAGUINHO', category: 'THIAGUINHO', title: 'Sou o Cara pra Você' },
    { artist: 'THIAGUINHO', category: 'THIAGUINHO', title: 'Vamo que Vamo' },
    // TIEE
    { artist: 'TIEE', category: 'TIEE', title: 'Modo Avião' },
    // TURMA DO PAGODE
    { artist: 'TURMA DO PAGODE', category: 'TURMA DO PAGODE', title: 'Puxa Agarra e Beija' },
    // VITINHO
    { artist: 'VITINHO', category: 'VITINHO', title: 'Sobrenome' },
    { artist: 'VITINHO', category: 'VITINHO', title: 'Traição' },
    // ZECA PAGODINHO
    { artist: 'ZECA PAGODINHO', category: 'ZECA PAGODINHO', title: 'Ogum' },
  ];

  const formattedVsSertanejoSongs = useMemo(() => {
    return vsSertanejoPlaylist.flatMap((artistData) => 
      artistData.songs.map((songTitle, index) => ({
        id: `sertanejo-${artistData.artist.replace(/\s+/g, '-').toLowerCase()}-${index}`,
        artist: artistData.artist,
        category: artistData.artist,
        title: songTitle
      }))
    );
  }, []);

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden">
      <Helmet>
        <title>MR Infoprodutos - Loops e Samples Profissionais para Sua Música</title>
        <meta name="description" content="Produza música profissional com nossos loops e samples de pagode, sertanejo e percussão. Compatível com Ableton, FL Studio, Logic Pro e mais." />
      </Helmet>

      <Header />

      <main className="min-h-screen w-full">
        <section 
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 overflow-hidden w-full"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1675292310383-0f4ef53fa3ab)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-background/90" />
          
          <div className="relative z-10 w-full max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 w-full px-2"
            >
              <div className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Music className="text-primary animate-wave w-10 h-10 sm:w-12 sm:h-12" style={{ animationDelay: '0s' }} />
                <Headphones className="text-primary animate-wave w-10 h-10 sm:w-12 sm:h-12" style={{ animationDelay: '0.2s' }} />
                <Disc className="text-primary animate-wave w-10 h-10 sm:w-12 sm:h-12" style={{ animationDelay: '0.4s' }} />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight text-balance mx-auto" style={{ letterSpacing: '-0.02em' }}>
                Loops e Samples Profissionais para Sua Música
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                Eleve suas produções musicais com samples premium de pagode, sertanejo e percussão. 
                Qualidade profissional, compatibilidade total.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="pt-6 sm:pt-8 w-full px-4"
              >
                <a
                  href="#produtos"
                  className="inline-block w-full sm:w-auto bg-primary text-primary-foreground px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg neon-glow-strong hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                >
                  Explorar Produtos
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="produtos" className="py-16 sm:py-24 px-4 sm:px-6 bg-background w-full overflow-hidden">
          <div className="max-w-7xl mx-auto space-y-12 sm:space-y-20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-8 sm:mb-16 w-full"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance mx-auto" style={{ letterSpacing: '-0.02em' }}>
                Nossos Produtos
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                Escolha o pack perfeito para suas produções
              </p>
            </motion.div>

            <div className="w-full">
              <ProductCard
                title="VS Pagode"
                description="Pack completo com multipistas profissionais de pagode. Compatível com todas as principais DAWs: Ableton, FL Studio, Logic Pro, Cubase, Pro Tools, Studio One."
                price={9700}
                features={vsPagodeFeatures}
                audioSamples={vsPagodeSamples}
                songs={vsPagodeSongs}
                productId="vs-pagode"
                pixUrl="https://pay.herospark.com/vs-pagode-518179"
              />
            </div>

            <div className="w-full">
              <ProductCard
                title="VS Sertanejo"
                description="Samples autênticos de sertanejo em alta qualidade. Multipistas editáveis compatíveis com todas as DAWs principais."
                price={9700}
                features={vsSertanejoFeatures}
                audioSamples={vsSertanejoSamples}
                songs={formattedVsSertanejoSongs}
                productId="vs-sertanejo"
                pixUrl="https://pay.herospark.com/vs-sertanejo-518184"
              />
            </div>

            <div className="w-full">
              <ProductCard
                title="Loops Percussão"
                description="Coleção variada de loops de percussão para complementar suas produções. Formatos WAV de alta qualidade."
                price={2990}
                features={loopsPercussaoFeatures}
                audioSamples={loopsPercussaoSamples}
                productId="loops-percussao"
                pixUrl="https://pay.herospark.com/loops-percussao-samba-pagode-518185"
              />
            </div>
          </div>
        </section>

        <FAQSection />

        <footer id="contato" className="bg-card text-card-foreground py-12 sm:py-16 px-4 sm:px-6 border-t border-border neon-border relative z-10 w-full overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
              <div className="w-full">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">MR Infoprodutos</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Produção musical profissional ao seu alcance. Samples e loops de alta qualidade para elevar suas criações.
                </p>
              </div>

              <div className="w-full">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contato</h3>
                <div className="space-y-3">
                  <a 
                    href="mailto:contato@mrinfoprodutos.com" 
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm sm:text-base break-all"
                  >
                    <Mail size={18} className="flex-shrink-0" />
                    <span>contato@mrinfoprodutos.com</span>
                  </a>
                </div>
              </div>

              <div className="w-full">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 -ml-2"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2"
                    aria-label="YouTube"
                  >
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-border/30 pt-6 sm:pt-8 text-center w-full">
              <p className="text-muted-foreground text-sm sm:text-base">
                © 2026 MR Infoprodutos. Todos os direitos reservados.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm sm:text-base">
                  Política de Privacidade
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm sm:text-base">
                  Termos de Serviço
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;
