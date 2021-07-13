<template>
  <v-app>
    <div class="container" style="margin: auto; width: 50%">
      <v-row align="center" justify="center">
        <h1>Generación de actas de evaluación</h1>
      </v-row>
      <v-row lign="center" justify="center">
        <template>
          <v-col cols="12" md="6" sm="6">
            <v-text-field
              v-model="search"
              label="Buscar acta de evaluación"
              outlined
              append-icon="mdi-magnify"
              single-line
              hide-details
              class="mx-4"
            ></v-text-field>
          </v-col>
          <div>
            <v-col cols="12" md="12" sm="12">
              <v-radio-group v-model="tipoBusqueda" row>
                <v-radio label="Por Evaluador" value="1"></v-radio>
                <v-radio label="Por folio de PEI" value="2"></v-radio>
              </v-radio-group>
            </v-col>
          </div>
        </template>
        <template>
          <v-data-table
            :headers="headers"
            :items="peis"
            :search="search"
          ></v-data-table>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2"> mdi-file-document </v-icon>
        </template>
      </v-row>
    </div>
  </v-app>
</template>
<script src="./JS/actaEvaluacionPEI.js">
</script>