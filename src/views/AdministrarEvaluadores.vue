<template>
  <v-app>
    <v-container>
      <v-data-table :headers="headers" :items="evaludores">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title> Administración de Evaluadores</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialogNuevoEvaluador" max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  rounded
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  Nuevo Evaluador
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ tituloDialogo }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="4" md="6">
                        <v-text-field
                          v-model="editedEvaluador.numeroPersonal"
                          :rules="reglas.requerido"
                          outlined
                          label="Número de Personal"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          outlined
                          v-model="editedEvaluador.apellidoPaterno"
                          :rules="reglas.requerido"
                          label="Apellido Pateno"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="editedEvaluador.apellidoMaterno"
                          :rules="reglas.requerido"
                          outlined
                          label="Apellido Materno"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="editedEvaluador.nombre"
                          :rules="reglas.requerido"
                          outlined
                          label="Nombre(s)"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-dialog
                          ref="dialog"
                          v-model="modalInicio"
                          :return-value.sync="editedEvaluador.fechaInicio"
                          persistent
                          width="290px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="editedEvaluador.fechaInicio"
                              outlined
                              label="Fecha de Incicio"
                              append-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker v-model="editedEvaluador.fechaInicio" scrollable>
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="modalInicio = false">
                              Cancelar
                            </v-btn>
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.dialog.save(editedEvaluador.fechaInicio)"
                            >
                              Aceptar
                            </v-btn>
                          </v-date-picker>
                        </v-dialog>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-dialog
                          ref="dialog"
                          v-model="modalTermino"
                          :return-value.sync="editedEvaluador.fechaTermino"
                          persistent
                          width="290px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="editedEvaluador.fechaTermino"
                              outlined
                              label="Fecha de Termino"
                              append-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker v-model="editedEvaluador.fechaTermino" scrollable>
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="modalTermino = false">
                              Cancelar
                            </v-btn>
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.dialog.save(editedEvaluador.fechaTermino)"
                            >
                              Aceptar
                            </v-btn>
                          </v-date-picker>
                        </v-dialog>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-select
                          :items="items"
                          label="Comisión"
                          outlined
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancelar
                  </v-btn>
                  <v-btn color="blue darken-1" rounded dark @click="save">
                    Guardar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogEliminarEvaluador" max-width="500px">
              <v-card>
                <v-card-title
                  >¿Estas seguro de eliminar este evaluador?
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete">
                    Cancelar
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm">
                    Aceptar
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editEvaluador(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteEvaluador(item)"> mdi-delete </v-icon>
        </template>
      </v-data-table>
    </v-container>
  </v-app>
</template>

<script src="./JS/evaluadores.js"></script>