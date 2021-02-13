<template>
  <v-app>
    <v-row no-gutters style="flex-wrap: nowrap">
      <v-flex xs12 md6 sm6>
        <v-img
          :width="955"
          :height="950"
          :max-height="1000"
          src="https://escuelasparalajusticiasocial.net/wp-content/uploads/2017/12/aprendizaje-basado-en-problemas-justicia-social.jpg"
        ></v-img>
      </v-flex>
      <v-flex xs12 md6 sm6>
        <div style="flex-basis: 20%" class="text-center">
          <v-toolbar color="primary" dark>
            <v-spacer></v-spacer>
            Universidad Veracruzana
          </v-toolbar>
        </div>
        <v-col>
          <v-row justify="center" align="center">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-col>
                <v-flex xs12 sm12 md12>
                  <v-text-field
                    v-model="correo"
                    :rules="reglas.email"
                    label="Correo"
                    autocomplete="new-password"
                    outlined
                    required
                  ></v-text-field
                ></v-flex>
                <v-flex xs12 sm12 md12>
                  <v-text-field
                    v-model="contrasena"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show ? 'text' : 'password'"
                    @click:append="show = !show"
                    autocomplete="new-password"
                    :rules="[reglas.requerido]"
                    outlined
                    label="Contraseña"
                    required
                  ></v-text-field
                ></v-flex>
                <v-flex xs12 md12 sm12>
                  <v-btn
                    color="primary"
                    dark
                    class="mr-4"
                    @click="iniciarSesion"
                  >
                    Iniciar Sesión
                  </v-btn></v-flex
                >
                <v-spacer></v-spacer>
                <v-flex xs12 md12 sm12>
                  <template>
                    <v-row justify="center">
                      <v-dialog
                        v-model="dialogPassword"
                        persistent
                        max-width="500px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary"
                            dark
                            text
                            v-bind="attrs"
                            v-on="on"
                          >
                            Recupera tu contraseña
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline"> Cambio de contraseña </span>
                          </v-card-title>
                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col cols="12" sm="8" md="8">
                                  <v-text-field
                                    v-model="password"
                                    :append-icon="
                                      show1 ? 'mdi-eye' : 'mdi-eye-off'
                                    "
                                    :rules="[reglas.requerido]"
                                    :type="show1 ? 'text' : 'password'"
                                    label="Nueva contraseña"
                                    @click:append="show1 = !show1"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="8" md="8">
                                  <v-text-field
                                    v-model="passwordconfirm"
                                    :append-icon="
                                      show2 ? 'mdi-eye' : 'mdi-eye-off'
                                    "
                                    :rules="[reglas.requerido]"
                                    :type="show2 ? 'text' : 'password'"
                                    label="Ingrese de nuevo su contraseña"
                                    @click:append="show2 = !show2"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="dialogPassword = false"
                            >
                              Cerrar
                            </v-btn>
                            <v-btn
                              color="blue darken-1"
                              dark
                              @click="dialogPassword = false"
                            >
                              Aceptar
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>
                  </template>
                </v-flex>
                <v-flex xs12 md12 sm12>
                  <template>
                    <v-row justify="center">
                      <v-dialog
                        v-model="dialogRegistrarMaestro"
                        persistent
                        max-width="500px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary"
                            dark
                            text
                            v-bind="attrs"
                            v-on="on"
                          >
                            Registrar Docente
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Registro de docente</span>
                          </v-card-title>
                          <v-card-text>
                            <v-form
                              ><v-container>
                                <v-row>
                                  <v-col cols="12" sm="10" md="10">
                                    <v-text-field
                                      label="Nombre"
                                      outlined
                                      dense
                                      :rules="reglas.requerido"
                                    >
                                    </v-text-field>
                                  </v-col>
                                  <v-col cols="12" sm="10" md="10">
                                    <v-text-field
                                      label="Apellido Paterno"
                                      :rules="reglas.requerido"
                                      outlined
                                      dense
                                    ></v-text-field>
                                  </v-col>
                                  <v-col cols="12" sm="10" md="10">
                                    <v-text-field
                                      label="Apellido Materno"
                                      :rules="reglas.requerido"
                                      outlined
                                      dense
                                    ></v-text-field>
                                  </v-col>
                                  <v-col cols="12" sm="10" md="10">
                                    <v-text-field
                                      v-model="correo"
                                      outlined
                                      dense
                                      :rules="[reglas.requerido, reglas.email]"
                                      label="Correo electrónico"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col cols="12" sm="10" md="10">
                                    <v-text-field
                                      v-model="password"
                                      dense
                                      :rules="reglas.requerido"
                                      :append-icon="
                                        show1 ? 'mdi-eye' : 'mdi-eye-off'
                                      "
                                      outlined
                                      :type="show3 ? 'text' : 'password'"
                                      label="Nueva contraseña"
                                      @click:append="show3 = !show3"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col cols="12" sm="10" md="10">
                                    <v-text-field
                                      v-model="passwordconfirm"
                                      :append-icon="
                                        show2 ? 'mdi-eye' : 'mdi-eye-off'
                                      "
                                      outlined
                                      dense
                                      :rules="reglas.requerido"
                                      :type="show4 ? 'text' : 'password'"
                                      label="Ingrese de nuevo su contraseña"
                                      @click:append="show4 = !show4"
                                    ></v-text-field>
                                  </v-col> </v-row></v-container
                            ></v-form>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="dialogRegistrarMaestro = false"
                            >
                              Cerrar
                            </v-btn>
                            <v-btn
                              color="blue darken-1"
                              dark
                              rounded
                              @click="dialogRegistrarMaestro = false"
                            >
                              Aceptar
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>
                  </template>
                </v-flex>
              </v-col>
            </v-form>
          </v-row>
        </v-col>
      </v-flex>
    </v-row>
    <v-dialog v-model="mensajeError" max-width="500px" persistent>
      <v-card>
        <v-card-title primary-title></v-card-title>
        <v-card-text>
          <p class="headline font-weight-bold">{{ mensaje }}</p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text dark @click="mensajeError = false"
            >Aceptar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="loading" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Espere un momento...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-footer color="primary lighten-1" padless>
      <v-col class="text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Universidad Veracruzana</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script src="./JS/acceso.js"></script>