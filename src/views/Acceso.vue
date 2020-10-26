<template>
  <v-app>
    <v-row no-gutters style="flex-wrap: nowrap">
      <v-flex xs12 md6 sm6>
        <v-img
          :width="width"
          :max-height="auto"
          src="https://dsia.uv.mx/miuv/escritorio/imgsMiUV/login2.jpg"
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
                    v-model="email"
                    :rules="emailRules"
                    label="Correo"
                    outlined
                    required
                  ></v-text-field
                ></v-flex>
                <v-flex xs12 sm12 md12>
                  <v-text-field
                    v-model="password"
                    :rules="emailRules"
                    outlined
                    label="Contraseña"
                    required
                  ></v-text-field
                ></v-flex>
                <v-flex xs12 md12 sm12>
                  <v-btn color="primary" dark class="mr-4" @click="login">
                    Iniciar Sesión
                  </v-btn></v-flex
                >
              </v-col>
            </v-form>
          </v-row>
        </v-col>
      </v-flex>
    </v-row>
    <v-footer color="primary lighten-1" padless>
      <v-col class="text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Universidad Veracruzana</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>