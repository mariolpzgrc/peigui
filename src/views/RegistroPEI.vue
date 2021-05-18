<template>
  <v-app>
    <v-container>
      <v-card class="mx-auto" color="#0E50A0" dark >
        <v-card-title>
          <v-img 
            class="elevation-6" 
            alt="" 
            src="https://lists.office.com/Images/3c907651-d8c6-4ca6-a8a4-6a242430e653/7e0e72b1-1409-4dae-bd54-a30eb0b25103/T0PDI771HYAY754ZUVI2ERFFH9/b2b854aa-689f-450b-b412-dea406eca721">
          </v-img><br />
          <v-row class="d-flex justify-center mb-12">
            <h1 class="header font-weight-medium" style="text-align: justify; font-family: arial;">
              Proyecto Educativo Innovador
            </h1><br />
              <p style="text-align: justify; font-family:arial; font-size:85%">
                Estimado (a) académico<br /> Para participar en el indicador 1.2.2.5 Proyectos Educativos Innovadores, desarrollados durante el periodo 1 de abril 2017 al 31 de marzo de 2019, se le sugiere los siguiente pasos:<br />
                <ol>
                  <li>Revisar el documento de apoyo a la evaluación del indicador 1.2.25 detenidamente.</li>
                  <li>Hacer el registro en línea del proyecto (por académico que colaboró en la elaboración del PEI).</li>
                  <li> Enviar los archivos en PDF y comprimidos al correo innovauv@uv.mx con la nomenclatura correspondiente.</li>
                </ol>
                Para el presente registro en línea es importante que utilice mayúsculas y minúsculas.
              </p>
          </v-row>
        </v-card-title>
      </v-card>
      <v-card class="mx-auto">
        <v-card-text>
          <v-form ref="formularioPEI" v-model="formularioValido">
            <v-row>
              <v-col cols="12" sm="6" md="8">
                <v-text-field
                  v-model="nombreProyecto" 
                  outlined 
                  clearable
                  :rules="reglas.requerido"
                  label="1. Nombre del Proyecto">
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="8">
                  <v-textarea 
                    v-model="nombreProyecto" 
                    outlined
                    :rules="reglas.requerido" 
                    clearable 
                    label="2. Descripción">
                  </v-textarea>
              </v-col>
              <v-col cols="12" sm="6" md="8">
                <v-textarea
                  v-model="ambitoAplicacion"
                  outlined
                  :rules="reglas.requerido"
                  label="3. Ambito de aplicación"
                >
                </v-textarea>              
              </v-col>
              <v-col cols="12" sm="6" md="8">
                <v-menu 
                  ref="menu" 
                  v-model="menu" 
                  :close-on-content-click="false" 
                  :return-value.sync="date" 
                  transition="scale-transition" 
                  offset-y min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="fechaInicio"
                      label="4. Fecha de Inicio"
                      append-icon="mdi-calendar"
                      outlined
                      :rules="reglas.requerido"
                      clearable
                      readonly
                      v-bind="attrs"
                      v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker 
                    v-model="date" 
                    no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancelar
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">
                      Aceptar
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="6" md="8">
                <v-menu 
                  ref="menu2" 
                  v-model="menu2" 
                  :close-on-content-click="false" 
                  :return-value.sync="date"
                  transition="scale-transition" 
                  offset-y 
                  min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field 
                      v-model="fechaTermino" 
                      label="5. Fecha de término" 
                      append-icon="mdi-calendar" 
                      outlined
                      :rules="reglas.requerido" 
                      clearable 
                      readonly 
                      v-bind="attrs" 
                      v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="date2" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu2 = false">
                      Cancelar
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">
                      Aceptar
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <template>
                  <v-row justify="center">
                    <v-dialog 
                      v-model="dialogRegistrarParticipantes"
                      max-width="600px"
                    >
                      <template v-slot:activator="{on, attrs}">
                        <v-btn
                          color="primary"
                          dark
                          rounded
                          v-bind="attrs"
                          v-on="on"
                        >
                          Registrar participante
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <span class="headline">Registro de participantes</span>
                        </v-card-title>
                      <v-card-text>
                        <v-form>
                          <v-container>
                            <v-row>
                              <v-col cols="12" sm="12" md="12">
                                <v-text-field 
                                  v-model="numeroPersonal" 
                                  outlined 
                                  :rules="reglas.requerido"
                                  clearable 
                                  label="1. Número de Personal">
                                </v-text-field>
                              </v-col>
                              <v-col cols="12" sm="12" md="12">
                                <v-text-field 
                                  v-model="apellidoPaterno" 
                                  :rules="reglas.requerido"
                                  outlined 
                                  clearable 
                                  label="2. Apellido Paterno">
                                </v-text-field>
                              </v-col>
                              <v-col cols="12" sm="12" md="12">
                                <v-text-field 
                                  v-model="apellidoMaterno" 
                                  outlined
                                  :rules="reglas.requerido"
                                  clearable 
                                  label="3. Apellido Materno">
                                </v-text-field>
                              </v-col>
                              <v-col cols="12" sm="12" md="12">
                                <v-text-field 
                                  v-model="nombre" 
                                  :rules="reglas.requerido"
                                  outlined 
                                  clearable 
                                  label="4. Nombre(s)">
                                </v-text-field>
                              </v-col>
                              <v-col cols="12" md="12" sm="12">
                                <div style="text-align: justify">
                                  <span class="title">5. Área académica</span>
                                </div>
                                <v-checkbox 
                                  v-model="selected" 
                                  label="Artes" 
                                  value="artes">
                                </v-checkbox>
                                <v-checkbox 
                                  v-model="selected" 
                                  label="Ciencias Biológico Agropecuarias" 
                                  value="biologiaAgropucuaria">
                                </v-checkbox>
                                <v-checkbox 
                                  v-model="selected" 
                                  label="Ciencias de la Salud" 
                                  value="salud">
                                </v-checkbox>
                                <v-checkbox 
                                  v-model="selected" 
                                  label="Económico Administrativa" 
                                  value="ecoAdmin">
                                </v-checkbox>
                                <v-checkbox 
                                  v-model="selected" 
                                  label="Humanidades" 
                                  value="humanidades">
                                </v-checkbox>
                                <v-checkbox 
                                  v-model="selected" 
                                  label="Técnica" 
                                  value="tecnica">
                                </v-checkbox>
                              </v-col>
                              <v-col cols="12" sm="12" md="12">
                                <v-text-field 
                                  v-model="entidad" 
                                  outlined 
                                  clearable 
                                  label="6. Entidad donde fue aplicado el Proyecto">
                                </v-text-field>
                              </v-col>
                              <v-col cols="12" sm="12" md="12">
                                <v-combobox 
                                  v-model="programaEductivo" 
                                  :items="programasEducativos" 
                                  label="7. Programa Educativo"
                                  outlined>
                                </v-combobox>
                              </v-col>
                              <v-col cols="12" sm="12" md="12">
                                <v-combobox 
                                  v-model="experienciaEductiva" 
                                  :items="experienciasEducativas" 
                                  label="8. Experiencias Educativas"
                                  outlined>
                                </v-combobox>
                              </v-col>
                              <v-col cols="12" md="12" sm="12">
                                <div style="text-align: justify">
                                  <span class="title">9. Área de formación de la EE</span>
                                </div>
                                <v-checkbox 
                                  v-model="seleccion" 
                                  label="Área de Formació Básica General(AFBG)" 
                                  value="afbg">
                                </v-checkbox>
                                <v-checkbox 
                                  v-model="seleccion" 
                                  label="Área de Formación Disciplinar (AFD)" 
                                  value="afd">
                                </v-checkbox>
                                <v-checkbox 
                                  v-model="seleccion" 
                                  label="Área de Formación Terminal (AFT)" 
                                  value="aft">
                                </v-checkbox>
                                <v-checkbox 
                                  v-model="seleccion" 
                                  label="Área de Formación de Elección Libre (AFEL)"
                                  value="afel">
                                  </v-checkbox>
                                <v-checkbox 
                                  v-model="seleccion" 
                                  label="Área de Formación Básica de Iniciación a la Disciplina (AFID)"
                                  value="afid">
                                </v-checkbox>
                              </v-col>
                              <v-col cols="12" sm="12" md="12">
                                <div style="text-align: justify">
                                  <span class="title">10. Región</span>
                                </div>
                                <v-img 
                                  src="https://lists.office.com/Images/3c907651-d8c6-4ca6-a8a4-6a242430e653/7e0e72b1-1409-4dae-bd54-a30eb0b25103/T0PDI771HYAY754ZUVI2ERFFH9/8aeb6948-c23a-41bf-969d-cf6012a05f90">
                                </v-img>
                              </v-col>
                              <v-col cols="12" sm="12" md="12">
                                <v-radio-group v-model="regionGrupo">
                                  <v-radio :label="`Xalapa`" :value="region"></v-radio>
                                  <v-radio :label="`Veracruz`" :value="region"></v-radio>
                                  <v-radio :label="`Orizaba-Cordoba`" :value="region"></v-radio>
                                  <v-radio :label="`Poza Rica - Tuxpan`" :value="region"></v-radio>
                                  <v-radio :label="`Coatzacoalcos - Minatitlán`" :value="region"></v-radio>
                                </v-radio-group>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-form>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                          <v-btn
                            color="blue darken-1"
                            text
                            @click="dialogRegistrarParticipantes = false"
                          >
                            Cerrar
                          </v-btn>
                          <v-btn
                            color="blue darken-1"
                            dark
                            rounded
                            @click="dialogRegistrarParticipantes = false"
                          >
                            Aceptar
                          </v-btn>
                      </v-card-actions>                      </v-card>

                    </v-dialog>
                  </v-row>
                </template>
              </v-col>
              <!--<v-col cols="12" md="8" sm="6">
                <div style="text-align: justify">
                  <span class="title">9. Número de participantes-colaboradores en el Proyecto (dar respuesta numérica como 1, 2, 3, 4 o 5).</span><br/>
                  <span class="title">De acuerdo con el instrumento de apoyo a la evaluación del indicador 1.2.2.5, en el numeral IV la cantidad máxima de participantes por PEI es de 5 personas.</span><br/>
                </div>
                <v-text-field 
                  v-model="numeroParticpantes"
                  :rules="[reglas.requerido, reglas.participantesMaximo, participantesMinimo]" 
                  @change="principleLogger(sliderLoan)" 
                  outlined 
                  label="Numero de participantes" 
                  type="number">
                </v-text-field>
              </v-col>-->
              <!---->
              <v-col cols="12" sm="12" md="12">
                <v-data-table dense :headers="headers" :items="participantes"></v-data-table>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-row>
          <v-col cols="12" sm="12" md="12">
            <v-checkbox
              v-model="checkbox"
              label="¿Desea incorporar este proyecto a RUA?"
            >
            </v-checkbox>
          </v-col>
          <v-col cols="12" sm="12" md="12"> 
            <v-btn depressed color="primary">
              Enviar
            </v-btn>
            </v-col>
            </v-row>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>

<script src="./JS/registroPEI.js"></script>