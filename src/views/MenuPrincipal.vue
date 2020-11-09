<template>
  <v-app>
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://gestioneducativa.educaweb.com/wp-content/uploads/2016/04/Ejemplos-de-proyectos-educativos.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-tecniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Sistema de Proyecto Educativo Innovador</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Lineamientos</v-tab>
          <v-tab>Registrar PEI</v-tab>
          <v-tab>Evaluar PEI</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer color="primary lighten-1" padless>
      <v-col class="text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Universidad Veracruzana</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script src="./JS/principal.js"></script>