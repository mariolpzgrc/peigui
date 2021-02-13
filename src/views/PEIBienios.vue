<template>
  <v-app>
    <v-container>
      <v-card>
        <v-card-title style="text-align: center">
          <span class="title"
            >Ejemplos de Proyecto Educativos Innovadores exitosos
          </span>
        </v-card-title>
        <v-card-text>
          <div style="text-align: center">
            <span class="title">1. Artes</span>
          </div>
          <v-col cols="12" sm="6" md="6">
            <v-data-table
              :headers="headers"
              :items="peiArtes"
              :hide-default-footer="true"
            >
              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2"> mdi-eye </v-icon>
              </template>
            </v-data-table></v-col
          >
          <div style="text-align: center">
            <span class="title">2. Ciencias Biológico Agropecuarias</span>
          </div>
          <v-col cols="12" sm="6" md="6">
            <v-data-table
              :headers="headers"
              :items="peiAgropecuarias"
              :hide-default-footer="true"
            >
              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2"> mdi-eye </v-icon>
              </template>
            </v-data-table></v-col
          >
          <div style="text-align: center">
            <span class="title">3. Ciencias de la Salud</span>
          </div>
          <v-col cols="12" sm="6" md="6">
            <v-data-table
              :headers="headers"
              :items="peiSalud"
              :hide-default-footer="true"
            >
              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2"> mdi-eye </v-icon>
              </template>
            </v-data-table></v-col
          >
          <div style="text-align: center">
            <span class="title">4. Económico Administrativa</span>
          </div>
          <v-col cols="12" sm="6" md="6">
            <v-data-table
              :headers="headers"
              :items="peiEcoAdmin"
              :hide-default-footer="true"
            >
              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2"> mdi-eye </v-icon>
              </template>
            </v-data-table>
          </v-col>
          <div style="text-align: center">
            <span class="title">5. Humanidades</span>
          </div>
          <v-col cols="12" sm="6" md="6">
            <v-data-table
              :headers="headers"
              :items="peiHumanidades"
              :hide-default-footer="true"
            >
              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2"> mdi-eye </v-icon>
              </template>
            </v-data-table>
          </v-col>
          <div style="text-align: center">
            <span class="title">6. Técnica</span>
          </div>
          <v-col cols="12" sm="6" md="6">
            <v-data-table
              :headers="headers"
              :items="peitecnica"
              :hide-default-footer="true"
            >
              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2"> mdi-eye </v-icon>
              </template>
            </v-data-table></v-col
          >
        </v-card-text>
      </v-card>
    </v-container></v-app
  >
</template>

<script src="./JS/PEIsBienios.js"></script>