<template>
  <v-app>
    <v-container>
      <v-row>
        <v-card color="#B278F2" class="white--text mt-8">
          <v-row>
            <v-col cols="3" sm="3" md="3">
              <v-card-title class="d-flex flex-row headline" flat tile>
                Criterio de Evaluación
              </v-card-title>
            </v-col>
            <v-col cols="3" sm="3" md="3">
              <v-card-title class="d-flex flex-row headline" flat tile
                >Cumple Totalmente 
              </v-card-title>
            </v-col>
            <v-col cols="3" sm="3" md="3">
              <v-card-title class="d-flex flex-row headline" flat tile
                >Cumple parcialmente 
              </v-card-title>
            </v-col>
            <v-col cols="3" sm="3" md="3">
              <v-card-title class="d-flex headline" flat tile
                >Cumple con lo minimo
              </v-card-title>
            </v-col>
          </v-row>
        </v-card>
        <v-card flat tile>
          <v-row>
            <v-col cols="3" sm="3" md="3">
              <v-card-title tile>
                <v-card-title> Suficiencia</v-card-title>
                <v-card-subtitle
                  >Con la estructura solicitada de un proyecto
                </v-card-subtitle>
              </v-card-title>
            </v-col>
            <v-col cols="9" sm="9" md="9">
              <v-card-title tile>
                <v-card-text>
                  <div style="text-align: justify">
                    El PEI presenta los elementos de la estructura solicitada,
                    expresando la presencia del diseño, propuesta de
                    intervención, implementación, ejecución y evaluación.<br />
                    Si cumple con el 80% al 100% de los elementos, se continuará
                    con la revisión del PEI, en caso contrario concluye la
                    evaluación y el dictamen es “no cumple”.
                  </div>
                </v-card-text>
              </v-card-title>
            </v-col>
          </v-row>
        </v-card>
        <v-card flat tile>
          <v-col cols="12" sm="12" md="12">
            <v-card-actions>
              <v-radio-group v-model="cumplePEI">
                <v-radio
                  :label="`Cumple`"
                  name="cumple"
                  :value="1"
                ></v-radio>
                <v-radio
                  :label="`No cumple`"
                  name="cumple"
                  :value="0"
                ></v-radio>
                <v-radio
                >
                </v-radio>
              </v-radio-group>
            </v-card-actions>
          </v-col>
        </v-card>
      </v-row>
      <div v-if="cumplePEI === 1">
        <v-card flat class="white--text mt-8">
          <v-row>
            <v-col cols="3" sm="3" md="3">
              <v-card-subtitle flat tile>
                <v-card-title> Pertinencia</v-card-title>
                <v-card-subtitle>
                  Con una necesidad vinculada a los aprendizajes de los
                  estudiantes <br /><br />
                  Mín 1 – Max 3 punto
                </v-card-subtitle>
              </v-card-subtitle>
            </v-col>
            <v-col cols="3" sm="3" md="3">
              <v-card-title tile>
                <v-card-subtitle flat tile>
                  Da respuesta a una necesidad vinculada a los aprendizajes de
                  los estudiantes, en entornos sociales, tendencias y
                  emergencias de las profesiones y de sus campos de acción,
                  desde los ámbitos regional, nacional e internacional,
                  contextualizada con el abordaje de una Experiencia Educativa o
                  un conjunto de ellas; o bien, desde otros ámbitos del
                  currículum en el nivel superior
                </v-card-subtitle>
              </v-card-title>
            </v-col>
            <v-col cols="3" sm="3" md="3">
              <v-card-subtitle flat tile>
                Se identifica de forma clara una necesidad académica o
                profesional contextualizada, sin embargo, no se reconocen las
                herramientas o estrategias para satisfacerla
              </v-card-subtitle>
            </v-col>
            <v-col cols="3" sm="3" md="3">
              <v-card-subtitle>
                Solo se presenta el abordaje habitual de una Experiencia
                Educativa o un conjunto de ellas.
              </v-card-subtitle>
            </v-col>
            <v-col cols="12" sm="4" order-sm="4">
              <v-card-actions>
                <v-text-field
                  v-model="puntaje"
                  label="Puntaje"
                  outlined
                  type="number"
                  required
                  @click:append-outer="increment"
                  @click:prepend="decrement"
                >
                </v-text-field>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
        <v-card flat class="white--text mt-8">
          <v-row>
            <v-col cols="3" sm="3" md="3">
              <v-card-subtitle flat tile>
                <v-card-title>Congruencia</v-card-title>
                <v-card-subtitle>
                  Con los desafios del MEIF
                  <b>
                    <ul>
                      <li>Formación integral del estudiante</li>
                      <li>Temas transversales</li>
                      <li>Innovación educativa</li>
                    </ul>
                  </b>
                  <br /><br />
                  Mín 1 – Max 3 punto
                </v-card-subtitle>
              </v-card-subtitle>
            </v-col>
            <v-col cols="3" sm="3" md="3">
              <v-card-title tile>
                <v-card-subtitle flat tile>
                  Es consistente con los desafíos señalados en el Modelo
                  Educativo Integral y Flexible como la formación integral del
                  estudiante, temas transversales e innovación educativa
                </v-card-subtitle>
              </v-card-title>
            </v-col>
            <v-col cols="3" sm="3" md="3">
              <v-card-subtitle flat tile>
                Se describe la presencia de una innovación educativa generando
                algo nuevo, transformador y valioso en los procesos educativos.
              </v-card-subtitle>
            </v-col>
            <v-col cols="3" sm="3" md="3">
              <v-card-subtitle>
                Es coherente con la intención del perfil de egreso, sin integrar
                el acercamiento de otros desafios del MEIF
              </v-card-subtitle>
            </v-col>
            <v-col cols="12" sm="4" order-sm="4">
              <v-card-actions>
                <v-text-field
                  v-model="puntaje"
                  label="Puntaje"
                  outlined
                  type="number"
                  required
                  @click:append-outer="increment"
                  @click:prepend="decrement"
                >
                </v-text-field>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
        <v-card flat class="white--text mt-8">
          <v-row>
            <v-col cols="3" sm="3" md="3">
              <v-card-subtitle flat tile>
                <v-card-title> Impacto</v-card-title>
                <v-card-subtitle>
                  En formación del estudiante <br /><br />
                  Mín 1 – Max 3 punto
                </v-card-subtitle>
              </v-card-subtitle>
            </v-col>
            <v-col cols="3" sm="3" md="3">
              <v-card-title tile>
                <v-card-subtitle flat tile>
                  Se detalla de forma clara el efecto de la intervención,
                  positivo o negativo, intencionales o no, que se tiene sobre la
                  formación profesional de la comunidad estudiantil
                </v-card-subtitle>
              </v-card-title>
            </v-col>
            <v-col cols="3" sm="3" md="3">
              <v-card-subtitle flat tile>
                Expone los hallazgos sin analizar efecto de la intervención
                sobre la formación profesional del la comunidad estudiantil
              </v-card-subtitle>
            </v-col>
            <v-col cols="3" sm="3" md="3">
              <v-card-subtitle>
                Solo expone algunos hallazgos.
              </v-card-subtitle>
            </v-col>
            <v-col cols="12" sm="4" order-sm="4">
              <v-card-actions>
                <v-text-field
                  v-model="puntaje"
                  label="Puntaje"
                  outlined
                  type="number"
                  required
                  @click:append-outer="increment"
                  @click:prepend="decrement"
                >
                </v-text-field>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
        <div>
          <v-card flat>
            <v-card-title>Dictamen final</v-card-title>
            <v-col cols="12" md="8">
              <v-simple-table>
                <template v-slot:default>
                  <thead bgcolor="#B278F2" class="white--text mt-8">
                    <th class="text-center">Criterio de evaluación</th>
                    <th class="text-center">Puntaje por asignar</th>
                    <th class="text-center">Puntaje asignado</th>
                  </thead>
                  <tbody>
                    <tr v-for="item in puntajes" :key="item.criterio">
                      <td>
                        <b>{{ item.criterio }}</b>
                      </td>
                      <td>{{ item.puntajeAsignar }}</td>
                      <td>{{ item.puntajeAsignado }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-card>
          <v-col cols="12" md="8">
            <v-textarea
              outlined
              name="input-7-4"
              label="Observaciones"
              value="En este espacio el evaluador expresa sus argumentos fundamentados que respalden el dictamen emitido o argumenta la resolución de alguna controversia determinante para la asignación del puntaje decidido. "
            ></v-textarea>
          </v-col>
          <v-col cols="12" md="6">
            <v-file-input
              label="Firma del evaluador 1"
              outlined
              dense
            ></v-file-input>
          </v-col>
          <v-col cols="12" md="6">
            <v-file-input
              label="Firma del evaluador 2"
              outlined
              dense
            ></v-file-input>
          </v-col>
        </div>
        <div>
          <v-btn rounded dark color="#B278F2"> Aceptar </v-btn>
        </div>
      </div>
      <div v-else-if="cumplePEI === 0">
        <v-btn rounded dark color="#B278F2" :to="{ name: 'evaluacion' }">
          Regresar
        </v-btn>
      </div>
    </v-container>
  </v-app>
</template>
<script src="./JS/evaluacionPEI.js">
</script>