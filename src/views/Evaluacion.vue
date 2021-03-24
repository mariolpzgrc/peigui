<template>
  <v-app>
    <v-container>
      <v-stepper tile v-model="procesoEvaluacion">
        <v-stepper-header>
          <v-stepper-step :complete="procesoEvaluacion > 1" step="1">
            Instrucciones para la evaluación
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="procesoEvaluacion > 2" step="2">
            Etapa 1: Revisión de la suficiencia
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="procesoEvaluacion > 3" step="3">
            Etapa 2: Evaluación de la calidad del PEI
          </v-stepper-step>
          <v-stepper-step :complete="procesoEvaluacion > 4" step="4">
            Finalizar
          </v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-container>
              <div style="text-align: justify">
                <h2>Instrucciones para la evaluación</h2>
                <p>
                  Con base en la descripción del PEI realizada por la Dirección
                  de innovación Educativa y lo dispuesto en el Reglamento del
                  Programa de Estímulos al Desempeño del Personal Académico
                  (PEDPA).<br />
                  Se solicita, que el Par Evaluador valore de forma objetiva,
                  justa e imparcial si el Proyecto educativo innovador (PEI)
                  cumple con los criterios de evaluación de suficiencia,
                  pertinencia y congruencia interna e impacto, apoyándose en el
                  instrumento de evaluación facilitado en la pestaña Etapa1 y
                  Etapa 2.
                </p>
              </div>
            </v-container>
            <v-btn rounded color="primary" @click="procesoEvaluacion = 2">
              Continuar
            </v-btn>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-card-text>
              <div style="text-align: justify">
                Elige la opción que juzgues pertinente para el criterio de
                suficiencia del PEI. La evaluación presenta dos dimensione:
                Cumple o No cumple. Si el PEI “cumple” con el 80% al 100% de los
                elementos de la estructura y los tres documentos solicitados
                para revisión, se continuará con la valoración del PEI, dando
                clic en el botón Continuar. En caso contrario concluye la
                evaluación y el dictamen es “no cumple”, por lo que deberás ir a
                Observaciones y argumentar la decisión y finalmente, cerrar el
                dictamen de evaluación, por lo que deberás ir al botón Firmar
                acta de evaluación.
              </div>
            </v-card-text>
            <v-simple-table>
              <template v-slot:default>
                <thead bgcolor="#B278F2" class="white--text mt-8">
                  <th class="text-center">Elementos</th>
                  <th class="text-center">Características</th>
                  <th class="text-center">Cumple</th>
                  <th class="text-center">No Cumple</th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div style="text-align: justify">
                        <ol>
                          <li>Portada con datos institucionales</li>
                        </ol>
                      </div>
                    </td>
                    <td>
                      <div style="text-align: justify">
                        <ul>
                          <li>Logo institucional</li>
                          <li>Nombre universidad</li>
                          <li>Entidad de adscripción</li>
                          <li>Programa (s) educativo (s)</li>
                          <li>Región (es)</li>
                          <li>Nombre del proyecto</li>
                          <li>
                            Nombre (s) del (los) participante(s) y num. de
                            Personal
                          </li>
                          <li>
                            Fecha de elaboración y conclusión del proyecto
                          </li>
                          <li>Lugar de aplicación del PEI</li>
                        </ul>
                      </div>
                    </td>
                    <td>
                      <div class="container">
                        <v-radio-group
                          v-model="puntajeTablaSuficiencia.puntajePortada"
                        >
                          <v-radio :value="10"> </v-radio>
                        </v-radio-group>
                      </div>
                    </td>
                    <td>
                      <div class="container">
                        <v-radio-group
                          v-model="puntajeTablaSuficiencia.puntajePortada"
                        >
                          <v-radio :value="0"> </v-radio>
                        </v-radio-group>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div style="text-align: justify">
                        <ol start="2">
                          <li>Índice</li>
                        </ol>
                      </div>
                    </td>
                    <td>
                      <div style="text-align: justify">
                        Con paginación, en apego a la estructura del PEI
                      </div>
                    </td>
                    <td>
                      <div class="container">
                        <v-radio-group
                          v-model="puntajeTablaSuficiencia.puntajeIndice"
                        >
                          <v-radio :value="10"> </v-radio>
                        </v-radio-group>
                      </div>
                    </td>
                    <td>
                      <div class="container">
                        <v-radio-group
                          v-model="puntajeTablaSuficiencia.puntajeIndice"
                        >
                          <v-radio :value="0"> </v-radio>
                        </v-radio-group>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div style="text-align: justify">
                        <ol start="3">
                          <li>
                            Datos de la (las) Experiencia(s) Educativa (s)
                            implicadas
                          </li>
                        </ol>
                      </div>
                    </td>
                    <td>
                      <div style="text-align: justify">
                        <ul>
                          <li>Nombre (s),</li>
                          <li>Academia,</li>
                          <li>
                            Área de formación del modelo educativo (AFBG, AFID,
                            AFD, AFT, AFEL),
                          </li>
                          <li>Unidad de competencia, y</li>
                          <li>Carácter (obligatoria u optativa).</li>
                        </ul>
                      </div>
                    </td>
                    <td>
                      <div class="container">
                        <v-radio-group
                          v-model="puntajeTablaSuficiencia.puntajeDatosEE"
                        >
                          <v-radio :value="10"> </v-radio>
                        </v-radio-group>
                      </div>
                    </td>
                    <td>
                      <div class="container">
                        <v-radio-group
                          v-model="puntajeTablaSuficiencia.puntajeDatosEE"
                        >
                          <v-radio :value="0"> </v-radio>
                        </v-radio-group>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div style="text-align: justify">
                        <ol start="4">
                          <li>Resumen</li>
                        </ol>
                      </div>
                    </td>
                    <td>
                      <div style="text-align: justify">
                        Deberá tener una extensión entre 350 a 500 palabras e
                        identificar las palabras claves, de 3 a 5.
                      </div>
                    </td>
                    <td>
                      <div class="container">
                        <v-radio-group
                          v-model="puntajeTablaSuficiencia.puntajeResumen"
                        >
                          <v-radio :value="10"> </v-radio>
                        </v-radio-group>
                      </div>
                    </td>
                    <td>
                      <div class="container">
                        <v-radio-group
                          v-model="puntajeTablaSuficiencia.puntajeResumen"
                        >
                          <v-radio :value="0"> </v-radio>
                        </v-radio-group>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div style="text-align: justify">
                        <ol start="5">
                          <li>Desarrollo</li>
                        </ol>
                      </div>
                    </td>
                    <td>
                      <div style="text-align: justify">
                        <p>
                          Muestra una necesidad vinculada a los aprendizajes de
                          los estudiantes, así como una reflexión en la cual se
                          expresan explícitamente los medios para satisfacerlas.
                          <br />
                          <br />
                          Presenta:
                        </p>
                        <ul>
                          <li>
                            Justificación del proyecto (Análisis de la situación
                            educativa, selección y definición del problema y el
                            contexto donde se implementó)
                          </li>
                          <li>
                            Definición de las intenciones o alcances del
                            proyecto
                          </li>
                          <li>Descripción de la innovación educativa</li>
                          <li>Medios y recursos para la implementación</li>
                        </ul>
                      </div>
                    </td>
                    <td>
                      <div class="container">
                        <v-radio-group
                          v-model="puntajeTablaSuficiencia.puntajeDesarrollo"
                        >
                          <v-radio :value="10"> </v-radio>
                        </v-radio-group>
                      </div>
                    </td>
                    <td>
                      <div class="container">
                        <v-radio-group
                          v-model="puntajeTablaSuficiencia.puntajeDesarrollo"
                        >
                          <v-radio :value="0"> </v-radio>
                        </v-radio-group>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div style="text-align: justify">
                        <ol start="6">
                          <li>Resultados y conclusiones</li>
                        </ol>
                      </div>
                    </td>
                    <td>
                      <div style="text-align: justify">
                        <p>
                          Evaluación del PEI e impacto en los aprendizajes de
                          las y los estudiantes (explícito en la(s) Unidad de
                          competencia o perfil de egreso) así como las
                          evidencias (fotos, videos, software, publicaciones,
                          entre otros).
                        </p>
                        <ul>
                          <li>Conclusión general</li>
                          <li>Aportación por participante</li>
                        </ul>
                      </div>
                    </td>
                    <td>
                      <div class="container">
                        <v-radio-group
                          v-model="puntajeTablaSuficiencia.puntajeResultados"
                        >
                          <v-radio :value="10"> </v-radio>
                        </v-radio-group>
                      </div>
                    </td>
                    <td>
                      <div class="container">
                        <v-radio-group
                          v-model="puntajeTablaSuficiencia.puntajeResultados"
                        >
                          <v-radio :value="0"> </v-radio>
                        </v-radio-group>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div style="text-align: justify">
                        <ol start="7">
                          <li>Propuesta de mejora</li>
                        </ol>
                      </div>
                    </td>
                    <td>
                      <div style="text-align: justify">
                        Discusión o análisis del impacto y propuestas para la
                        mejora o nueva implementación.
                      </div>
                    </td>
                    <td>
                      <div class="container">
                        <v-radio-group
                          v-model="puntajeTablaSuficiencia.puntajePropuesta"
                        >
                          <v-radio :value="10"> </v-radio>
                        </v-radio-group>
                      </div>
                    </td>
                    <td>
                      <div class="container">
                        <v-radio-group
                          v-model="puntajeTablaSuficiencia.puntajePropuesta"
                        >
                          <v-radio :value="0"> </v-radio>
                        </v-radio-group>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div style="text-align: justify">
                        <ol start="8">
                          <li>Fuentes de información</li>
                        </ol>
                      </div>
                    </td>
                    <td>
                      <div style="text-align: justify">
                        En Formato APA (indique la edición utilizada,
                        preferentemente la 6ª. Edición).
                      </div>
                    </td>
                    <td>
                      <div class="container">
                        <v-radio-group
                          v-model="puntajeTablaSuficiencia.puntajeFuentes"
                        >
                          <v-radio :value="10"> </v-radio>
                        </v-radio-group>
                      </div>
                    </td>
                    <td>
                      <div class="container">
                        <v-radio-group
                          v-model="puntajeTablaSuficiencia.puntajeFuentes"
                        >
                          <v-radio :value="0"> </v-radio>
                        </v-radio-group>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div style="text-align: justify">
                        <ol start="9">
                          <li>Anexos</li>
                        </ol>
                      </div>
                    </td>
                    <td>
                      <div style="text-align: justify">
                        Información complementaria como gráficas, páginas,
                        tablas, entrevistas, encuestas, entre otras.
                      </div>
                    </td>
                    <td>
                      <div class="container">
                        <v-radio-group
                          v-model="puntajeTablaSuficiencia.puntajeAnexos"
                        >
                          <v-radio :value="10"> </v-radio>
                        </v-radio-group>
                      </div>
                    </td>
                    <td>
                      <div class="container">
                        <v-radio-group
                          v-model="puntajeTablaSuficiencia.puntajeAnexos"
                        >
                          <v-radio :value="0"> </v-radio>
                        </v-radio-group>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div style="text-align: justify">
                        Documentos complementarios
                      </div>
                    </td>
                    <td>
                      <div style="text-align: justify">
                        <ul>
                          <li>
                            Aval del Consejo Técnico u Órganos Equivalentes (en
                            el cuál no participen los autores del PEI)
                          </li>
                          <li>
                            Programa de la experiencia educativa, avalado y
                            registrado en el portal de la entidad académica
                            correspondiente
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td>
                      <div class="container">
                        <v-radio-group
                          v-model="puntajeTablaSuficiencia.puntajeDocumentos"
                        >
                          <v-radio :value="10"> </v-radio>
                        </v-radio-group>
                      </div>
                    </td>
                    <td>
                      <div class="container">
                        <v-radio-group
                          v-model="puntajeTablaSuficiencia.puntajeDocumentos"
                        >
                          <v-radio :value="0"> </v-radio>
                        </v-radio-group>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <div>
              <v-col cols="12" md="8">
                <v-textarea
                  outlined
                  name="input-7-4"
                  label="Observaciones"
                  value="En este espacio el evaluador expresa sus argumentos fundamentados que respalden el dictamen emitido o argumenta la resolución de alguna controversia determinante para la asignación del puntaje decidido. "
                ></v-textarea>
              </v-col>
              <h3 class="headline">Firmar acta de evaluación</h3>
              <small>
                * El formato de la imagen de la firma de ser .png con fondo
                transparente con resolusion de 640x480px
              </small>
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
            <v-divider></v-divider>
            <v-btn
              v-if="(puntajeSuficienciaTotal) => 80"
              color="primary"
              @click="procesoEvaluacion = 3"
              rounded
            >
              Continuar
            </v-btn>
            <v-btn
              v-else-if="puntajeSuficienciaTotal < 80"
              color="primary"
              @click="procesoEvaluacion = 4"
            >
              Terminar
            </v-btn>
            <v-btn rounded text @click="procesoEvaluacion = 1">Cancelar</v-btn>
            <v-btn dark text color="primary">Guardar</v-btn>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-card-text>
              <div style="text-align: justify">
                Elige la opción que juzgues pertinente para cada criterio de
                calidad del PEI. La evaluación presenta tres dimensiones: No
                cumple que presenta la puntuación más baja con 1; Cumple
                parcialmente que representa 2 puntos, y Cumple en su totalidad
                que representa 3 puntos.
              </div>
            </v-card-text>
            <v-row>
              <v-col cols="12">
                <v-card color="#B278F2" class="white--text mt-6">
                  <v-row>
                    <v-col cols="3" sm="3" md="3">
                      <v-card-title
                        class="d-flex flex-row headline justify-center"
                        flat
                        tile
                      >
                        Criterio de <br />Evaluación
                      </v-card-title>
                    </v-col>
                    <v-col cols="3" sm="3" md="3">
                      <v-card-title
                        class="d-flex flex-row headline justify-center"
                        flat
                        tile
                      >
                        Cumple <br />
                        Totalmente
                      </v-card-title>
                    </v-col>
                    <v-col cols="3" sm="3" md="3">
                      <v-card-title
                        class="d-flex flex-row headline justify-center"
                        flat
                        tile
                      >
                        Cumple <br />parcialmente
                      </v-card-title>
                    </v-col>
                    <v-col cols="3" sm="3" md="3">
                      <v-card-title
                        class="d-flex headline justify-center"
                        flat
                        tile
                      >
                        Cumple con lo <br />minimo
                      </v-card-title>
                    </v-col>
                  </v-row>
                </v-card>
                <v-card flat class="white--text mt-2">
                  <v-row>
                    <v-col cols="3" sm="3" md="3">
                      <v-card-subtitle flat tile>
                        <v-card-title> Pertinencia</v-card-title>
                        <v-card-subtitle>
                          Con una necesidad vinculada a los aprendizajes de los
                          estudiantes <br /><br />
                          Mín 1 – Max 3 puntos
                        </v-card-subtitle>
                      </v-card-subtitle>
                    </v-col>
                    <v-col cols="3" sm="3" md="3">
                      <v-card-title class="justify-center" tile>
                        <v-card-subtitle flat tile>
                          Da respuesta a una necesidad vinculada a los
                          aprendizajes de los estudiantes, en entornos sociales,
                          tendencias y emergencias de las profesiones y de sus
                          campos de acción, desde los ámbitos regional, nacional
                          e internacional, contextualizada con el abordaje de
                          una Experiencia Educativa o un conjunto de ellas; o
                          bien, desde otros ámbitos del currículum en el nivel
                          superior
                        </v-card-subtitle>
                        <v-card-actions>
                          <v-radio-group v-model="puntajePertinencia">
                            <v-radio :value="3"> </v-radio>
                          </v-radio-group>
                        </v-card-actions>
                      </v-card-title>
                    </v-col>
                    <v-col cols="3" sm="3" md="3">
                      <v-card-title class="justify-center" tile>
                        <v-card-subtitle flat tile>
                          Se identifica de forma clara una necesidad académica o
                          profesional contextualizada, sin embargo, no se
                          reconocen las herramientas o estrategias para
                          satisfacerla
                        </v-card-subtitle>
                        <v-card-actions>
                          <v-radio-group v-model="puntajePertinencia">
                            <v-radio :value="2"> </v-radio>
                          </v-radio-group>
                        </v-card-actions>
                      </v-card-title>
                    </v-col>
                    <v-col cols="3" sm="3" md="3">
                      <v-card-title class="justify-center" tile>
                        <v-card-subtitle>
                          Solo se presenta el abordaje habitual de una
                          Experiencia Educativa o un conjunto de ellas.
                        </v-card-subtitle>
                        <v-card-actions>
                          <v-radio-group v-model="puntajePertinencia">
                            <v-radio :value="1"> </v-radio
                          ></v-radio-group>
                        </v-card-actions>
                      </v-card-title>
                    </v-col>
                  </v-row>
                </v-card>
                <v-card flat class="white--text">
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
                          Mín 1 – Max 3 puntos
                        </v-card-subtitle>
                      </v-card-subtitle>
                    </v-col>
                    <v-col cols="3" sm="3" md="3">
                      <v-card-title class="justify-center" tile>
                        <v-card-subtitle flat tile>
                          Es consistente con los desafíos señalados en el Modelo
                          Educativo Integral y Flexible como la formación
                          integral del estudiante, temas transversales e
                          innovación educativa
                        </v-card-subtitle>
                        <v-card-actions>
                          <v-radio-group v-model="puntajeCongruencia">
                            <v-radio :value="3"> </v-radio>
                          </v-radio-group>
                        </v-card-actions>
                      </v-card-title>
                    </v-col>
                    <v-col cols="3" sm="3" md="3">
                      <v-card-title class="justify-center" tile>
                        <v-card-subtitle flat tile>
                          Se describe la presencia de una innovación educativa
                          generando algo nuevo, transformador y valioso en los
                          procesos educativos.
                        </v-card-subtitle>
                        <v-card-actions>
                          <v-radio-group v-model="puntajeCongruencia">
                            <v-radio :value="2"> </v-radio>
                          </v-radio-group>
                        </v-card-actions>
                      </v-card-title>
                    </v-col>
                    <v-col cols="3" sm="3" md="3">
                      <v-card-title class="justify-center" tile>
                        <v-card-subtitle>
                          Es coherente con la intención del perfil de egreso,
                          sin integrar el acercamiento de otros desafios del
                          MEIF
                        </v-card-subtitle>
                        <v-card-actions>
                          <v-radio-group v-model="puntajeCongruencia">
                            <v-radio :value="1"> </v-radio>
                          </v-radio-group>
                        </v-card-actions>
                      </v-card-title>
                    </v-col>
                  </v-row>
                </v-card>
                <v-card flat class="white--text">
                  <v-row>
                    <v-col cols="3" sm="3" md="3">
                      <v-card-subtitle flat tile>
                        <v-card-title> Impacto</v-card-title>
                        <v-card-subtitle>
                          En formación del estudiante <br /><br />
                          Mín 1 – Max 3 puntos
                        </v-card-subtitle>
                      </v-card-subtitle>
                    </v-col>
                    <v-col cols="3" sm="3" md="3">
                      <v-card-title class="justify-center" tile>
                        <v-card-subtitle flat tile>
                          Se detalla de forma clara el efecto de la
                          intervención, positivo o negativo, intencionales o no,
                          que se tiene sobre la formación profesional de la
                          comunidad estudiantil
                        </v-card-subtitle>
                        <v-card-actions>
                          <v-radio-group v-model="puntajeImpacto">
                            <v-radio :value="3"> </v-radio>
                          </v-radio-group>
                        </v-card-actions>
                      </v-card-title>
                    </v-col>
                    <v-col cols="3" sm="3" md="3">
                      <v-card-title class="justify-center" tile>
                        <v-card-subtitle flat tile>
                          Expone los hallazgos sin analizar efecto de la
                          intervención sobre la formación profesional del la
                          comunidad estudiantil
                        </v-card-subtitle>
                        <v-card-actions>
                          <v-radio-group v-model="puntajeImpacto">
                            <v-radio :value="2"> </v-radio>
                          </v-radio-group>
                        </v-card-actions>
                      </v-card-title>
                    </v-col>
                    <v-col cols="3" sm="3" md="3">
                      <v-card-title class="justify-center" tile>
                        <v-card-subtitle>
                          Solo expone algunos hallazgos.
                        </v-card-subtitle>
                        <v-card-actions>
                          <v-radio-group v-model="puntajeImpacto">
                            <v-radio :value="1"> </v-radio>
                          </v-radio-group>
                        </v-card-actions>
                      </v-card-title>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
            <div class="justify-center">
              <v-card flat>
                <v-card-title class="headline">Dictamen final</v-card-title>
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
              <h3 class="headline">Firmar acta de evaluación</h3>
              <small
                >* El formato de la imagen de la firma de ser .png con fondo
                transparente con resolusion de 640x480px</small
              >
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
            <v-btn rounded color="primary" @click="procesoEvaluacion = 4">
              Terminar
            </v-btn>
            <v-btn
              color="primary"
              rounded
              text
              @click.native="procesoEvaluacion = 2"
              >Regresar</v-btn
            >
            <v-btn rounded text @click.native="procesoEvaluacion = 1"
              >Cancelar</v-btn
            >
            <v-btn dark color="primary" rounded text>Guardar</v-btn>
          </v-stepper-content>
          <v-stepper-content step="4">
            <h1>¡Gracias por su participación!</h1>
            <v-row justify="center">
              <v-icon dark right x-large color="green"
                >mdi-checkbox-marked-circle
              </v-icon>
            </v-row>
            <v-spacer></v-spacer>
            <v-btn
              color="blue-grey"
              class="ma-2 white--text"
              @click="loader = 'loading3'"
            >
              Descargar acta
              <v-icon right dark> mdi-cloud-download </v-icon>
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-container>
  </v-app>
</template>
<script src="./JS/evaluacionPEI.js">
</script>