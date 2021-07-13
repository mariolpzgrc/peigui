<template>
  <v-app>
    <div class="container" style="margin; auto; width: 50%">
      <v-container>
        <v-card class="mx-auto" flat>
          <v-row>
            <v-col cols="12" sm="10" md="10">
              <v-card-title>
                <span class="headline">
                  Ejemplos de Proyectos Educativos Innovadores</span
                >
              </v-card-title>
            </v-col>
            <v-col cols="12" md="10" sm="10">
              <div align="center">
                <v-combobox
                  multiple
                  outlined
                  label="Seleccione el(las) áreas académicas"
                >
                </v-combobox>
              </div>
            </v-col>
            <v-col cols="12" md="12" sm="12">
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Nombre del PEI</th>
                      <th class="text-left">Archivo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in desserts" :key="item.name">
                      <td>{{ item.name }}</td>
                      <td>{{ item.calories }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </div>
  </v-app>
</template>