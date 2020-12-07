<template>
  <v-app>
    <v-app-bar
      app
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://gestioneducativa.educaweb.com/wp-content/uploads/2016/04/Ejemplos-de-proyectos-educativos.jpg"
      fade-img-on-scroll
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-toolbar-title>Sistema de Proyecto Educativo Innovador</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab @click="abrirlineamientos()">Lineamientos</v-tab>
          <v-tab>Registrar PEI</v-tab>
          <v-tab>Evaluar PEI</v-tab>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-tab color="white" dark text v-bind="attrs" v-on="on">
                Admimistración
              </v-tab>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                @click="selectionSection(item)"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <v-container
        fluid
        app
      >
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