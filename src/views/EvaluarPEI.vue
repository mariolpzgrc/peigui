<template>
  <v-app>
    <v-container>
      <v-card-title class="headline"> Evaluación </v-card-title>
      <v-row class="pa-4">
        <v-col cols="5">
          <v-treeview
            :active.sync="active"
            :items="items"
            :load-children="fetchPeis"
            activatable
            :open.sync="open"
            color="warning"
            open-on-click
            transition
          >
            <template v-slot:prepend="{ item }">
              <v-icon v-if="!item.children"> mdi-file-pdf </v-icon>
            </template>
          </v-treeview>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col class="d-flex text-center">
          <v-scroll-y-transition mode="out-in">
            <div
              v-if="!selected"
              class="title grey--text text--lighten-1 font-weight-light"
              style="align-self: center"
            >
              Seleccione un Proyecto Educativo Innovador
            </div>
            <v-card
              v-else
              :key="selected.id"
              class="pt-6 mx-auto"
              flat
              max-width="400"
            >
              <v-card-text>
                <h3 class="headline mb-2">
                  {{ selected.nombreProyecto }}
                </h3>
                <div class="blue--text mb-2">
                  {{ selected.descripcion }}
                </div>
                <div class="blue--text subheading font-weight-bold">
                  {{ selected.fechaInicio }}
                </div>
                <div class="blue--text subheading font-weight-bold">
                  {{ selected.fechaTermino }}
                </div>
              </v-card-text>
            </v-card>
            <v-divider></v-divider>
            <v-row class="text-left" tag="v-card-text">
              <!--<v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn depressed v-bind="attrs" v-on="on"> Ver PEI </v-btn>
                </template>
                <span>Al dar clic se abrira el PEI en una nueva pestaña</span>
              </v-tooltip>
              <template>
                <v-row justify="center"></v-row>
              </template>-->
            </v-row>
          </v-scroll-y-transition>
        </v-col>
        <v-row justify="center" class="text-left" tag="v-card-text">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn depressed v-bind="attrs" v-on="on"> Ver PEI </v-btn>
            </template>
            <span>Al dar clic se abrira el PEI en una nueva pestaña</span>
          </v-tooltip>
        </v-row>
        <template>
          <v-row justify="center">
            <v-dialog v-model="dialogEvaluar" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                  Evaluar
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">Evaluar Proyecto Educativo Innovador</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                        v-model="puntaje"
                          label="Puntaje"
                          outlined
                          type="number"
                          required
                          @click:append-outer="increment"
                          @click:prepend="decrement"
                          :rules="[reglas.requerido]"
                        ></v-text-field>
                      </v-col>
                      
                    </v-row>
                  </v-container>
                  <small>*Campos requeridos</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialogEvaluar = false">
                    Cerrar
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="dialogEvaluar = false">
                    Guardar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </template>
      </v-row>
    </v-container>
  </v-app>
</template>

<script src="./JS/evaluacion.js">
</script>