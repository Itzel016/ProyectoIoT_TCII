# Sistema IoT para la detección de incendios en el interior de una vivienda.
**Problemática**

Las principales causas de incendios en viviendas en México se relacionan con fallas en las instalaciones eléctricas, fugas o acumulación de Gas LP, grasa en la cocina y incendios provocados intencionalmente; cuando ocurre un incendio dentro de una vivienda de manera inesperada esta se propaga rápidamente dentro de la vivienda poniendo en riesgo a los habitantes de esta. Durante un incendio las personas y sus bienes materiales se encuentran en riesgo, ya que el fuego puede provocar pérdidas económicas debido a la destrucción de muebles, documentos y otros objetos de valor, además la exposición al humo y el fuego ponen en riesgo la integridad de las personas que habitan la vivienda y en casos más graves provocar lesiones y incluso pérdidas humanas.
Uno de los problemas que se presenta es que cuando el incendio se detecta ha alcanzado una gran parte de la vivienda y limitando el tiempo para que los habitantes salgan para solicitar ayuda. Por ello es necesario contar con un sistema capaz de detectar de manera temprana un posible incendio mediante el uso de sensores de humo, gas, temperatura y humedad con el propósito de identificar de manera oportuna la presencia de un incendio brindando mayor seguridad para los habitantes y reducción de pérdidas económicas.

El presente proyecto demuestra el uso de tecnologías relacionadas con el *Internet de las Cosas* (IoT, por sus siglas en inglés *Internet of Things*) y su relación con los Sistemas Embebidos, mediante la integración de hardware y software para la detección y respuesta ante posibles incendios en el interior de una vivienda.

En base al diseño realizado para crear el sistema se consideran los siguientes elementos:

* **Microcontrolador:** Placa de desarrollo ESP32.
* **Sensores:** BME680, MQ-2, KY-026 y GPS NEO-6M.
* **Actuadores:** Buzzer, LEDs, pantalla LCD, servomotores, bomba de agua y aspersor.
* **Protocolos de comunicación:** MQTT.
* **Tecnologías de comunicación:** Wi-Fi y Bluetooth.
* **Backend:** Spring Boot y API REST.
* **Base de datos:** MySQL para el almacenamiento de mediciones, eventos y alertas.
* **Interfaz:** Aplicación web desarrollada con HTML, CSS y JavaScript para el monitoreo de las variables, visualización de alertas y control de los actuadores.

**Hipotesis**

La implementación de un sistema IoT para el monitoreo de temperatura, humo y gases dentro de una vivienda permitirá detectar oportunamente condiciones que puedan estar relacionadas con un incendio. El sistema podrá generar alertas para informar al usuario sobre una posible situación de riesgo, lo que permitirá mejorar el tiempo de respuesta ante una emergencia.

**Justificación**

El desarrollo de este proyecto es importante debido a que busca mejorar la seguridad dentro de las viviendas mediante el uso de tecnología IoT. La integración de sensores y conexión inalámbrica permitirá detectar condiciones que puedan indicar la presencia de un incendio y comunicar esta información de manera oportuna al usuario.

Asimismo, el sistema permitirá monitorear las condiciones del interior de la vivienda y generar alertas cuando se detecten valores anormales, incluso cuando el usuario no se encuentre en el lugar. El uso de componentes electrónicos accesibles permitirá desarrollar una alternativa funcional y de bajo costo 

Alcance

El proyecto comprende el diseño y desarrollo de un prototipo destinado al monitoreo de las condiciones ambientales en una o varias áreas de una vivienda. Para ello, se utilizarán sensores que permitirán obtener información sobre variables como temperatura, humo y gases.

Los datos obtenidos serán procesados mediante un microcontrolador y enviados a través de una conexión a Internet hacia una plataforma de monitoreo, donde podrán ser consultados por el usuario. Cuando se detecten valores que representen una posible situación de riesgo, el sistema podrá activar una alarma y enviar una notificación.

El proyecto estará orientado principalmente a la detección y notificación de posibles incendios. No incluirá sistemas automáticos para extinguir el fuego y no pretende sustituir los equipos profesionales de detección y protección contra incendios.

Estos son los elementos empleados en el proyecto

# Materiales y componentes

Para desarrollar el prototipo del sistema IoT de detección de incendios se utilizaron componentes electrónicos capaces de medir temperatura, humo, gases y presencia de flama. También se incorporaron elementos para procesar la información y emitir alertas en notificaciones.

# **Sensor MQ-135**

**¿Qué es?**

> El sensor MQ-135 es un sensor utilizado para detectar cambios en la calidad del aire y la presencia de determinados gases. En este proyecto se utilizará para monitorear la concentración de humo dentro de una vivienda y detectar posibles indicios de incendio.

**¿Cómo funciona?**

> El sensor detecta cambios en la concentración de sustancias presentes en el aire y genera una señal eléctrica que puede ser interpretada por el ESP32.

> Dentro del sistema, el sensor monitorea continuamente la concentración de humo. Los valores obtenidos son enviados al ESP32, que los adquiere y transmite hacia el equipo de monitoreo.

**Valores de referencia**

> * La concentración normal de humo se establece entre 10 y 100 ppm (partes por millón).

> * Cuando la concentración de humo alcanza o supera los 300 ppm, se considera un posible indicio de incendio.

**¿Cómo se implementaría?**

> 1. El sensor MQ-135 se conectará al módulo ESP32. El sensor realizará el monitoreo de la concentración de humo presente en el ambiente.

> 2. El ESP32 se encargará de adquirir la información proporcionada por el sensor y transmitirla hacia el equipo de monitoreo.

**Entrada**

> La entrada del sensor corresponde al aire del ambiente, en el cual se encuentran las sustancias y gases que serán detectados.

**Salida**

> La salida del sensor es una señal eléctrica que representa los cambios detectados en el ambiente. Esta información puede ser leída por el ESP32 para obtener los valores correspondientes a la concentración detectada.

**Funciones y comandos utilizados**

- `analogRead()`: permite realizar la lectura de una señal analógica proveniente del sensor.
- `digitalRead()`: permite realizar la lectura de una señal digital del módulo.
- `pinMode()`: permite configurar el pin del ESP32 como entrada.
- `Serial.begin()`: inicia la comunicación serial.
- `Serial.println()`: permite mostrar los valores obtenidos por el sensor.
- `if`: permite comparar los valores obtenidos con los límites definidos.

**Características**

> - Detecta determinados gases presentes en el aire.
> - Permite detectar cambios en la calidad del aire.
> - Permite monitorear la concentración de humo.
> - Cuenta con salida analógica.
> - Puede contar con salida digital.
> - Puede conectarse al ESP32.
> - Requiere un periodo de calentamiento para obtener lecturas más estables.
> - La concentración normal de humo establecida para el sistema es de 10 a 100 ppm.
> - Una concentración igual o superior a 300 ppm se considera un posible indicio de incendio.

**Función dentro del proyecto**

> El sensor MQ-135 tiene como función monitorear la concentración de humo dentro de la vivienda. La información obtenida será adquirida por el ESP32 y transmitida hacia el equipo de monitoreo para identificar condiciones normales o posibles indicios de incendio.

<img width="709" height="401" alt="Imagen1" src="https://github.com/user-attachments/assets/ac54b2dd-b235-49e1-b2c7-1657b883e7ef" />

# **Módulo ESP32**

**¿Qué es?**

> El ESP32 es un microcontrolador diseñado para desarrollar proyectos electrónicos y sistemas relacionados con el Internet de las Cosas. Cuenta con conectividad Wi-Fi y Bluetooth, además de pines que permiten conectar sensores y otros dispositivos.

> En este proyecto se utilizará como la unidad principal encargada de adquirir, procesar y transmitir la información obtenida por los sensores instalados dentro de la vivienda.

**¿Cómo funciona?**

> El ESP32 ejecuta un programa almacenado en su memoria. Este programa le permite leer las señales enviadas por los sensores, procesar los valores obtenidos y transmitir la información hacia el equipo de monitoreo.

> Su funcionamiento se divide principalmente en dos partes: la función `setup()`, que configura los componentes al encender el sistema, y la función `loop()`, que realiza continuamente la lectura y transmisión de los datos.

**Conectividad**

> El ESP32 cuenta con conexión Wi-Fi integrada, por lo que puede conectarse a una red local sin utilizar un módulo adicional.

> En el proyecto, esta conexión permitirá transmitir los valores obtenidos por los sensores hacia el equipo o plataforma de monitoreo. Si la conexión se interrumpe, el ESP32 continuará realizando las lecturas y podrá intentar reconectarse a la red.

**¿Cómo se implementaría?**

> 1. Los sensores utilizados en el proyecto se conectarán a los pines de entrada del ESP32.

> 2. El ESP32 adquirirá las señales analógicas o digitales generadas por los sensores.

> 3. Los valores obtenidos serán procesados y comparados con los límites definidos para el sistema.

> 4. El ESP32 se conectará a la red Wi-Fi disponible en la vivienda.

> 5. La información será transmitida hacia el equipo de monitoreo para mostrar el estado de las condiciones ambientales.

> 6. El proceso de lectura y transmisión se realizará continuamente mientras el sistema se encuentre encendido.

**Entradas**

> Las entradas del ESP32 corresponden a las señales analógicas y digitales enviadas por los sensores conectados al sistema.

> Entre las entradas contempladas se encuentra la señal generada por el sensor MQ-135, la cual representa los cambios detectados en la calidad del aire y la posible concentración de humo.

**Salidas**

> La salida principal del ESP32 será la información procesada y transmitida mediante Wi-Fi hacia el equipo de monitoreo.

> También puede utilizar la comunicación serial para mostrar las lecturas obtenidas durante la programación y las pruebas del prototipo.

**Pines utilizados**

| Pin o conexión | Tipo | Función |
|---|---|---|
| `VIN` o `5V` | Entrada | Permite alimentar la placa, dependiendo del modelo utilizado. |
| `3V3` | Salida | Proporciona alimentación regulada de 3.3 V. |
| `GND` | Conexión común | Funciona como referencia de tierra para el circuito. |
| `GPIO` | Entrada o salida | Permite conectar sensores y otros componentes. |
| `ADC` | Entrada analógica | Permite leer la señal analógica de sensores como el MQ-135. |
| `TX` y `RX` | Comunicación | Permiten enviar y recibir información mediante comunicación serial. |
| Wi-Fi | Comunicación inalámbrica | Permite transmitir la información hacia el equipo de monitoreo. |

> La selección definitiva de los pines GPIO dependerá del diagrama de conexiones del prototipo.

**Funciones y comandos utilizados**

- `setup()`: contiene las instrucciones que se ejecutan una sola vez al encender o reiniciar el ESP32.
- `loop()`: contiene las instrucciones que se ejecutan continuamente.
- `pinMode()`: permite configurar un pin como entrada o salida.
- `analogRead()`: permite adquirir una señal analógica proveniente de un sensor.
- `digitalRead()`: permite adquirir el estado digital de un sensor.
- `Serial.begin()`: inicia la comunicación serial.
- `Serial.print()`: muestra información en el monitor serial sin realizar un salto de línea.
- `Serial.println()`: muestra información en el monitor serial y realiza un salto de línea.
- `WiFi.begin()`: inicia la conexión del ESP32 con una red Wi-Fi.
- `WiFi.status()`: permite comprobar el estado de la conexión Wi-Fi.
- `if`: permite comparar las lecturas con los límites establecidos.
- `delay()`: establece una pausa entre las lecturas realizadas.
- `millis()`: permite controlar intervalos de tiempo sin detener completamente la ejecución del programa.

**Ejemplo de conexión Wi-Fi**

```cpp
#include <WiFi.h>

const char* nombreRed = "NOMBRE_DE_LA_RED";
const char* contrasena = "CONTRASENA";

void setup() {
  Serial.begin(115200);

  WiFi.begin(nombreRed, contrasena);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println("Conectando a la red Wi-Fi...");
  }

  Serial.println("ESP32 conectado a la red");
  Serial.println(WiFi.localIP());
}

void loop() {
}
```

> Por seguridad, el nombre y la contraseña reales de la red Wi-Fi no deberán publicarse dentro del repositorio de GitHub.

**Características**

> - Integra conectividad Wi-Fi.
> - Integra conectividad Bluetooth.
> - Puede recibir señales analógicas y digitales.
> - Cuenta con múltiples pines de entrada y salida.
> - Puede conectarse con diferentes tipos de sensores.
> - Puede procesar la información localmente.
> - Permite transmitir información mediante Internet.
> - Puede programarse utilizando Arduino IDE.
> - Es compatible con el lenguaje de programación C/C++.
> - Funciona con niveles lógicos de 3.3 V.
> - Puede utilizar protocolos de comunicación como UART, I2C y SPI.
> - Tiene un tamaño reducido y un consumo energético adecuado para prototipos IoT.

**Precauciones**

> - Los pines del ESP32 trabajan con un nivel lógico máximo de 3.3 V.
> - No se deben conectar señales de 5 V directamente a sus entradas.
> - Se debe comprobar el voltaje de salida de cada sensor antes de conectarlo.
> - Todos los componentes deben compartir una conexión común a `GND`.
> - Las conexiones deben realizarse con el ESP32 desconectado de la alimentación.
> - Las credenciales de la red Wi-Fi no deben publicarse en GitHub.

**Función dentro del proyecto**

> El ESP32 tendrá la función de controlar el proceso de adquisición y transmisión de la información del sistema. Recibirá las señales generadas por los sensores, procesará las lecturas y las comparará con los valores establecidos para identificar condiciones normales o posibles indicios de incendio.

> Posteriormente, transmitirá los resultados mediante Wi-Fi hacia el equipo de monitoreo, donde será posible consultar el estado de las condiciones ambientales dentro de la vivienda.

**Flujo de funcionamiento**

> **Sensores → ESP32 → procesamiento de datos → conexión Wi-Fi → equipo de monitoreo**

# **Sensor DHT11**

**¿Qué es?**

> El DHT11 es un sensor digital utilizado para medir la temperatura y la humedad relativa del ambiente. Es un componente económico y común en proyectos electrónicos y sistemas relacionados con el Internet de las Cosas.

> En este proyecto se utilizará para monitorear la temperatura dentro de una vivienda e identificar incrementos anormales que puedan estar relacionados con un posible incendio.

**¿Cómo funciona?**

> El DHT11 contiene un elemento encargado de medir la humedad y un termistor que permite detectar la temperatura. Internamente procesa ambas mediciones y las envía mediante una señal digital hacia el ESP32.

> El ESP32 solicita periódicamente la información al sensor y obtiene dos valores: la temperatura expresada en grados Celsius y la humedad relativa expresada en porcentaje.

> La temperatura por sí sola no confirma la existencia de un incendio. Por este motivo, sus lecturas serán analizadas junto con la información obtenida por el sensor MQ-135 y los demás componentes del sistema.

**Valores de medición**

| Variable | Rango aproximado | Precisión aproximada |
|---|---:|---:|
| Temperatura | De 0 °C a 50 °C | ±2 °C |
| Humedad relativa | De 20 % a 80 % | ±5 % |
| Frecuencia de lectura | Una lectura por segundo | 1 Hz |

> Estos valores corresponden a las características generales del DHT11 y pueden presentar variaciones dependiendo del fabricante, la ubicación y las condiciones ambientales.

**Valores de referencia para el proyecto**

> El sensor registrará continuamente la temperatura y la humedad dentro de la vivienda. Primero se obtendrán mediciones en condiciones normales para establecer un valor ambiental de referencia.

> Cuando se detecte un incremento considerable de temperatura respecto al valor normal, el ESP32 marcará la lectura como una posible condición de riesgo. Esta información será analizada junto con la concentración detectada por el MQ-135.

> El límite definitivo de temperatura no se establecerá de manera arbitraria. Se determinará durante la fase de calibración y pruebas controladas del prototipo.

**¿Cómo se implementaría?**

> 1. El sensor DHT11 se conectará a uno de los pines digitales del ESP32.

> 2. El sensor realizará mediciones periódicas de temperatura y humedad dentro de la vivienda.

> 3. El ESP32 solicitará las mediciones mediante la librería correspondiente.

> 4. Los valores obtenidos serán comparados con los límites definidos durante las pruebas del sistema.

> 5. La información será transmitida mediante Wi-Fi hacia el equipo de monitoreo.

> 6. Los valores del DHT11 serán analizados junto con la información proporcionada por el MQ-135 para identificar posibles condiciones de riesgo.

**Entrada**

> La entrada del DHT11 corresponde a las condiciones ambientales que rodean al sensor. El componente percibe la temperatura del aire y la cantidad de humedad presente en el entorno.

**Salida**

> La salida del DHT11 es una señal digital que contiene los valores de temperatura y humedad relativa.

> Esta señal es enviada a uno de los pines GPIO del ESP32, donde es interpretada mediante una librería de programación.

**Pines del sensor**

| Pin | Tipo | Función |
|---|---|---|
| `VCC` | Entrada | Proporciona alimentación eléctrica al sensor. |
| `DATA` | Salida digital | Envía al ESP32 los valores de temperatura y humedad. |
| `GND` | Conexión común | Conecta el sensor a tierra. |

> Algunos sensores DHT11 individuales cuentan con cuatro pines, mientras que los módulos comerciales normalmente tienen tres. En la versión de cuatro pines, uno de ellos no se utiliza.

**Conexión propuesta con el ESP32**

| DHT11 | ESP32 | Función |
|---|---|---|
| `VCC` | `3V3` | Alimentación de 3.3 V |
| `DATA` | `GPIO 14` | Transmisión de las mediciones |
| `GND` | `GND` | Tierra común |

> Si se utiliza el sensor DHT11 sin una tarjeta de módulo, puede necesitarse una resistencia de aproximadamente 10 kΩ entre los pines `VCC` y `DATA`. Algunos módulos ya incluyen esta resistencia.

**Librería utilizada**

> Para facilitar la comunicación entre el DHT11 y el ESP32 se utilizará la librería `DHT sensor library`, disponible en el administrador de librerías de Arduino IDE.

> También puede ser necesario instalar la librería `Adafruit Unified Sensor`, dependiendo de la versión utilizada.

**Funciones y comandos utilizados**

- `#include <DHT.h>`: incluye la librería necesaria para controlar el sensor.
- `DHT dht()`: crea el objeto que representa al sensor y define el pin utilizado.
- `dht.begin()`: inicia la comunicación con el DHT11.
- `dht.readTemperature()`: obtiene la temperatura en grados Celsius.
- `dht.readHumidity()`: obtiene el porcentaje de humedad relativa.
- `isnan()`: comprueba si ocurrió un error durante la lectura.
- `Serial.begin()`: inicia la comunicación serial.
- `Serial.print()`: muestra información sin realizar un salto de línea.
- `Serial.println()`: muestra información y realiza un salto de línea.
- `if`: permite comparar la temperatura con los límites establecidos.
- `delay()`: permite establecer un intervalo entre las lecturas.

**Ejemplo de lectura**

```cpp
#include <DHT.h>

#define PIN_DHT 14
#define TIPO_DHT DHT11

DHT dht(PIN_DHT, TIPO_DHT);

void setup() {
  Serial.begin(115200);
  dht.begin();
}

void loop() {
  float humedad = dht.readHumidity();
  float temperatura = dht.readTemperature();

  if (isnan(humedad) || isnan(temperatura)) {
    Serial.println("Error al obtener la lectura del DHT11");
    delay(2000);
    return;
  }

  Serial.print("Temperatura: ");
  Serial.print(temperatura);
  Serial.println(" °C");

  Serial.print("Humedad: ");
  Serial.print(humedad);
  Serial.println(" %");

  delay(2000);
}
```

> El intervalo de dos segundos permite que el sensor complete correctamente sus mediciones antes de solicitar una nueva lectura.

**Características**

> - Permite medir temperatura ambiental.
> - Permite medir humedad relativa.
> - Proporciona una señal digital.
> - Puede conectarse directamente al ESP32.
> - Tiene un consumo energético reducido.
> - Cuenta con un tamaño compacto.
> - Es económico y fácil de conseguir.
> - Puede programarse mediante una librería de Arduino IDE.
> - Su rango aproximado de temperatura es de 0 °C a 50 °C.
> - Su rango aproximado de humedad es de 20 % a 80 %.
> - Puede realizar aproximadamente una lectura por segundo.
> - No necesita una entrada analógica del ESP32.

**Precauciones y limitaciones**

> - El DHT11 no detecta directamente humo, gas ni fuego.
> - La temperatura por sí sola no permite confirmar un incendio.
> - Su rango y precisión son limitados en comparación con sensores más avanzados.
> - No debe colocarse directamente frente a una llama.
> - No debe exponerse al agua o a condensación.
> - Debe instalarse en una zona con circulación de aire.
> - Las lecturas deben realizarse con un intervalo suficiente.
> - Los valores obtenidos deben combinarse con las mediciones de otros sensores.

**Función dentro del proyecto**

> El DHT11 tendrá como función monitorear la temperatura y la humedad dentro de la vivienda. Sus mediciones serán adquiridas por el ESP32 y transmitidas hacia el equipo de monitoreo.

> Cuando se detecte un incremento anormal de temperatura, el ESP32 comparará esta información con los valores proporcionados por el MQ-135. La combinación de las mediciones permitirá identificar con mayor precisión condiciones normales o posibles indicios de incendio.

**Flujo de funcionamiento**

> **Temperatura y humedad del ambiente → DHT11 → ESP32 → procesamiento de datos → conexión Wi-Fi → equipo de monitoreo**

## Sensor de fuego KY-026

**¿Qué es?**

> El KY-026 es un módulo electrónico utilizado para detectar la presencia de una llama mediante la radiación infrarroja que esta produce, el cual se utiliza en proyectos de seguridad, sistemas de alarma y prototipos relacionados con la detección de incendios.

> Durante el desarrollo de éste proyecto servirá como una fuente adicional de información para identificar una posible situación de incendio dentro de la vivienda, dado que sus lecturas serán analizadas junto con los datos obtenidos por los sensores de temperatura, humedad, humo y gases.

**¿Cómo funciona?**

> El dispositivo cuenta con un módulo receptor sensible a determinadas longitudes de onda de luz infrarroja, generalmente dentro de un rango aproximado de 760 a 1100 nanómetros, es por ello que cuando existe una llama frente al sensor, la radiación recibida produce una variación en su señal eléctrica. El módulo incorpora un comparador LM393 y un potenciómetro que permite ajustar la sensibilidad de la salida digital. Dependiendo de la intensidad de la llama detectada y del ajuste realizado, el módulo puede indicar si existe o no una posible llama.

> Debido a que otras fuentes de luz o calor pueden producir radiación infrarroja, la activación del KY-026 no confirmará por sí sola la existencia de un incendio, es necesario reforzar la medición del resultado con mediciones adicionales tales como: temperatura, humo y gases.

**Tipo de detección**

> El KY-026 no mide directamente la temperatura ni el tamaño del fuego. Su función consiste en detectar cambios en la intensidad de la radiación infrarroja recibida.

> La capacidad de detección puede variar dependiendo de la distancia, el tamaño de la llama, la orientación del sensor y las condiciones de iluminación. Por eso, los valores finales se definirán después de realizar varias pruebas.

**Valores de referencia para el proyecto**

> Primero se tomarán lecturas del sensor en un ambiente normal y sin presencia de fuego. Después, se harán pruebas con una llama pequeña y controlada para comparar cómo cambia la señal.

> La salida digital servirá para saber cuándo se supera el nivel ajustado con el potenciómetro, mientras que la salida analógica mostrará los cambios en la intensidad detectada.

> El valor final se definirá después de realizar las pruebas de calibración, ya que las lecturas pueden variar dependiendo del módulo y de las condiciones del ambiente.

**¿Cómo se implementaría**
> - El sensor KY-026 se conectará al ESP32 para recibir alimentación y enviar sus lecturas.
> - Se colocará apuntando hacia el área que se quiere monitorear.
> - El ESP32 revisará constantemente las salidas analógica y digital del sensor.
> - La sensibilidad se ajustará con el potenciómetro que incluye el módulo.
> - Los datos obtenidos se compararán con las lecturas de los demás sensores.
> - Si se detecta una llama y también se presentan otros cambios en el ambiente, el sistema aumentará el nivel de riesgo y podrá generar una alerta.
> - Finalmente, la información se enviará por medio de Wi-Fi y MQTT al equipo de monitoreo.

**Entrada**
> El KY-026 recibe radiación infrarroja del ambiente, la cual puede ser generada por una llama o por otras fuentes cercanas de luz y calor.

**Salidas**
> El módulo cuenta con una salida analógica y una digital. La salida analógica muestra los cambios en la intensidad detectada, mientras que la salida digital indica si se superó el nivel ajustado con el potenciómetro.

**Pines del sensor**
| Pin   | Tipo             | Función                                                    |
|-------|------------------|------------------------------------------------------------|
| `VCC` | Entrada          | Proporciona alimentación eléctrica al módulo.              |
| `GND` | Conexión común   | Conecta el módulo a tierra.                                |
| `A0`  | Salida analógica | Entrega un valor relacionado con la intensidad detectada.  |
| `D0`  | Salida digital   | Indica si se alcanzó el nivel configurado.                 |

**Funciones y comandos utilizados**
1. `pinMode()`: configura el pin digital que recibirá la señal del sensor.
2. `analogRead()`: lee el valor de la salida analógica.
3. `digitalRead()`: revisa el estado de la salida digital.
4. `Serial.begin()`: inicia la comunicación con el monitor serial.
5. `Serial.print()`: muestra datos en la misma línea.
6. `Serial.println()`: muestra datos y agrega un salto de línea.
7. `if`: comprueba si se cumplen las condiciones para detectar una posible llama.
8. `delay()`: agrega un tiempo de espera entre cada lectura.
9. `millis()`: controla el tiempo entre lecturas sin detener por completo el programa.

**Ejemplo de lectura**

```cpp
#define PIN_ANALOGICO 34
#define PIN_DIGITAL 27

void setup() {
  Serial.begin(115200);

  pinMode(PIN_ANALOGICO, INPUT);
  pinMode(PIN_DIGITAL, INPUT);
}

void loop() {
  int valorAnalogico = analogRead(PIN_ANALOGICO);
  int estadoDigital = digitalRead(PIN_DIGITAL);

  Serial.print("Lectura analógica: ");
  Serial.println(valorAnalogico);

  if (estadoDigital == LOW) {
    Serial.println("Posible llama detectada");
  } else {
    Serial.println("No se detecta llama");
  }

  delay(1000);
}
```
**Características**

> - Detecta la radiación infrarroja que puede producir una llama.
> - Tiene una salida analógica y una salida digital.
> - Utiliza un comparador LM393.
> - Incluye un potenciómetro para regular la sensibilidad de detección.
> - Es compatible con el ESP32.
> - Su tamaño es pequeño.
> - Es accesible y sencillo de usar.
> - Se puede ajustar de acuerdo con las condiciones del lugar.
> - Puede trabajar junto con otros sensores.
> - La lectura puede cambiar según la distancia y la posición de la llama.
> - No necesita una librería adicional para obtener las lecturas.

> En la mayoría de los módulos KY-026, la salida digital cambia a `LOW` cuando la lectura supera el nivel ajustado con el potenciómetro. Esto se comprobará durante las pruebas, ya que puede cambiar dependiendo de la versión del módulo.

**Precauciones y limitaciones**

> - El KY-026 no debe usarse por sí solo para confirmar la presencia de un incendio.
> - Debe estar orientado hacia el área donde podría aparecer la llama.
> - Las paredes u otros objetos pueden bloquear la detección.
> - La luz del sol y algunas lámparas pueden alterar las lecturas detectadas, asimilando que forman parte de la llama.
> - La distancia de detección cambia según el tamaño y la intensidad de la llama.
> - No debe instalarse muy cerca del fuego.
> - Es necesario calibrarlo antes de definir el nivel de detección.
> - Las pruebas con fuego deben hacerse en un lugar seguro, controlado y bajo supervisión.
> - Al tratarse de un prototipo académico, no reemplaza a un detector de incendios certificado.

**Función dentro del proyecto**

> El sensor KY-026 se utilizará para detectar la posible presencia de una llama en el área monitoreada. La señal será enviada al ESP32 y se comparará con las lecturas de los sensores de temperatura, humo y gases.

> Si el KY-026 detecta una llama, el sistema revisará los datos de los demás sensores. Cuando varias lecturas indiquen un posible incendio, se generará una alerta y se activarán las acciones establecidas en el prototipo.

# **Módulo GPS NEO-6M**

**¿Qué es?**

> El GPS NEO-6M es un módulo que recibe señales de distintos satélites para calcular su ubicación geográfica.

> En este proyecto se usará para conocer las coordenadas del prototipo y agregarlas a las mediciones y alertas enviadas por el sistema.

**¿Cómo funciona?**

> El módulo recibe señales de diferentes satélites y utiliza la información obtenida para calcular su ubicación. Para determinar una posición necesita recibir la señal de varios satélites al mismo tiempo.

> Una vez calculada la ubicación, el GPS envía datos como latitud, longitud, altitud, hora y cantidad de satélites disponibles mediante comunicación serial UART.

> El ESP32 recibirá esta información y extraerá los datos necesarios para enviarlos al equipo de monitoreo. Debido a que el prototipo estará ubicado en el interior de una vivienda, la recepción de la señal puede verse limitada por paredes, techos y otros obstáculos.

**Datos obtenidos**

> El GPS NEO-6M proporciona distintos datos sobre su ubicación y la señal recibida de los satélites.

| Dato         | Descripción                                                   |
|--------------|---------------------------------------------------------------|
| Latitud      | Indica la posición del dispositivo hacia el norte o el sur.   |
| Longitud     | Indica la posición del dispositivo hacia el este o el oeste.  |
| Altitud      | Muestra la altura aproximada sobre el nivel del mar.           |
| Satélites    | Número de satélites utilizados para calcular la ubicación.    |
| Fecha y hora | Información de tiempo recibida mediante la señal GPS.         |
| Velocidad    | Velocidad calculada cuando el dispositivo está en movimiento. |

> En este proyecto se utilizarán principalmente la latitud y la longitud. Los demás datos servirán durante las pruebas para verificar que el módulo funcione correctamente.

**Valores de referencia para el proyecto**

> Primero se comprobará si el módulo logró obtener una ubicación válida. Una vez que se conecte con los satélites, las coordenadas se guardarán en el sistema.

> Como el prototipo estará colocado en un punto fijo, no será necesario consultar la ubicación con la misma frecuencia que los demás sensores, ya que el tiempo entre cada lectura se definirá durante las pruebas.

> Si el GPS no consigue obtener una ubicación dentro de la vivienda, se podrá realizar la primera lectura en un lugar con mejor vista hacia el cielo y guardar las últimas coordenadas registradas.

**¿Cómo se implementaría?**

> 1. El GPS NEO-6M se conectará a los pines de comunicación serial del ESP32.
> 2. Cuando se encienda el sistema, el módulo comenzará a buscar la señal de los satélites.
> 3. El ESP32 recibirá la información del GPS mediante comunicación UART.
> 4. Los datos recibidos se procesarán con una librería compatible con el módulo.
> 5. El sistema comprobará que la ubicación obtenida sea válida.
> 6. La latitud y la longitud se agregarán a las mediciones y alertas del prototipo.
> 7. Las coordenadas se enviarán por medio de Wi-Fi y MQTT al equipo de monitoreo.
> 8. La aplicación web mostrará la ubicación registrada del prototipo.

**Entrada**

> El NEO-6M recibe señales de radio enviadas por los satélites GPS. Para calcular su ubicación, necesita colocarse en un lugar donde pueda recibir la señal con la menor cantidad de obstáculos posible.

**Salida**

> El módulo envía los datos por comunicación serial. Entre ellos se encuentran la latitud, longitud, altitud, fecha, hora, velocidad y cantidad de satélites conectados.

> El ESP32 recibirá estos datos y tomará solamente la información necesaria para el proyecto.

**Pines del módulo**

| Pin   | Tipo            | Función                                                   |
|-------|-----------------|-----------------------------------------------------------|
| `VCC` | Entrada         | Proporciona alimentación al módulo.                       |
| `GND` | Conexión común  | Conecta el módulo a tierra.                               |
| `TX`  | Salida serial   | Envía los datos del GPS al ESP32.                         |
| `RX`  | Entrada serial  | Recibe instrucciones enviadas por el ESP32.               |
| `PPS` | Salida de pulso | Genera una señal de tiempo precisa en algunos modelos.    |

> Algunos módulos solo cuentan con los pines `VCC`, `GND`, `TX` y `RX`.

**Conexión propuesta con el ESP32**

| GPS NEO-6M | ESP32           | Función                                     |
|-------------|-----------------|---------------------------------------------|
| `VCC`       | `3V3` o `5V`    | Alimentación según el modelo utilizado.     |
| `GND`       | `GND`           | Conexión a tierra.                          |
| `TX`        | `GPIO 16 (RX2)` | Envía los datos del GPS al ESP32.           |
| `RX`        | `GPIO 17 (TX2)` | Recibe instrucciones desde el ESP32.        |

> El pin `TX` del GPS se conecta al pin `RX` del ESP32. De la misma manera, el pin `RX` del GPS se conecta al pin `TX` del ESP32.

> Antes de conectarlo, se deberá revisar el voltaje indicado en el módulo, dado que algunas versiones incluyen un regulador y aceptan 5 V, mientras que otras trabajan con 3.3 V.

**Librería utilizada**

> Para leer los datos del módulo se utilizará la librería `TinyGPSPlus`, disponible en el administrador de librerías del programa Arduino IDE.

> Con esta librería se pueden obtener las coordenadas, la fecha, la hora, la altitud, la velocidad y el número de satélites sin procesar manualmente toda la información enviada por el GPS.

**Funciones y comandos utilizados**

- `#include <TinyGPSPlus.h>`: agrega la librería necesaria para leer los datos.
- `TinyGPSPlus gps`: crea el objeto que procesará la información del GPS.
- `Serial2.begin()`: inicia la comunicación entre el ESP32 y el módulo.
- `Serial2.available()`: revisa si hay datos disponibles.
- `Serial2.read()`: lee los caracteres enviados por el GPS.
- `gps.encode()`: procesa cada carácter recibido.
- `gps.location.isValid()`: comprueba si la ubicación es válida.
- `gps.location.isUpdated()`: revisa si las coordenadas cambiaron.
- `gps.location.lat()`: obtiene la latitud.
- `gps.location.lng()`: obtiene la longitud.
- `gps.satellites.value()`: muestra la cantidad de satélites detectados.
- `Serial.print()`: muestra los datos en el monitor serial.
- `if`: permite comprobar el estado de la ubicación.

**Ejemplo de lectura**

```cpp
#include <TinyGPSPlus.h>

TinyGPSPlus gps;

#define RX_GPS 16
#define TX_GPS 17

void setup() {
  Serial.begin(115200);
  Serial2.begin(9600, SERIAL_8N1, RX_GPS, TX_GPS);

  Serial.println("Buscando señal GPS...");
}

void loop() {
  while (Serial2.available() > 0) {
    gps.encode(Serial2.read());
  }

  if (gps.location.isUpdated() && gps.location.isValid()) {
    Serial.print("Latitud: ");
    Serial.println(gps.location.lat(), 6);

    Serial.print("Longitud: ");
    Serial.println(gps.location.lng(), 6);

    Serial.print("Satélites: ");
    Serial.println(gps.satellites.value());
  }

  if (!gps.location.isValid()) {
    Serial.println("Ubicación GPS no disponible");
  }

  delay(1000);
}
```

> El NEO-6M normalmente utiliza una velocidad de 9600 baudios, aunque será necesario revisar la configuración del módulo adquirido.

**Características**

> - Obtiene coordenadas geográficas de posicionamiento en tiempo real.
> - Proporciona datos de latitud y longitud.
> - También puede mostrar la altitud, velocidad, fecha y hora.
> - Utiliza comunicación UART.
> - Es compatible con el ESP32.
> - Generalmente trabaja a 9600 baudios.
> - Puede incluir una antena integrada o externa.
> - Algunos modelos tienen una batería de respaldo.
> - Puede guardar temporalmente información para encontrar los satélites con mayor rapidez en el siguiente encendido.
> - Su consumo de energía permite utilizarlo en prototipos.
> - Se puede programar con la librería `TinyGPSPlus`.
> - No necesita Internet para calcular la ubicación.

**Precauciones y limitaciones**

> - Necesita recibir la señal de los satélites para obtener una ubicación.
> - Las paredes y los techos pueden debilitar la señal.
> - Puede tener dificultades para funcionar dentro de una vivienda.
> - La primera conexión puede tardar desde algunos segundos hasta varios minutos.
> - La antena debe colocarse orientada hacia el cielo.
> - Se debe evitar instalarlo cerca de objetos que bloqueen o interfieran con la señal.
> - Las coordenadas pueden tener un pequeño margen de error.
> - La ubicación no siempre estará disponible.
> - Se debe comprobar el voltaje antes de conectarlo.
> - El módulo únicamente obtiene la ubicación; no puede enviar mensajes por sí mismo.
> - Las coordenadas indican la ubicación del prototipo, no el punto exacto donde se encuentra el fuego.

**Función dentro del proyecto**

> El GPS NEO-6M se encargará de obtener las coordenadas del lugar donde se encuentre instalado el prototipo. La latitud y la longitud se guardarán junto con las mediciones y alertas del sistema.

> Si se detecta un posible incendio, estas coordenadas ayudarán a identificar la vivienda donde se generó la alerta. El módulo mostrará la ubicación general del dispositivo, pero no podrá señalar el punto exacto del incendio dentro de la vivienda.

# **Bomba de agua de 5 V**

**¿Qué es?**

> La bomba de agua de 5 V es un pequeño dispositivo eléctrico que permite mover agua desde un recipiente hasta una manguera o salida. Se utiliza en proyectos de riego, fuentes pequeñas y sistemas de automatización.
>
> En este proyecto representará el sistema de aspersión que se activará cuando los sensores detecten señales de un posible incendio.

**¿Cómo funciona?**

> La bomba tiene un motor que gira al recibir corriente. Este movimiento toma el agua por la entrada y la impulsa hacia la salida, donde se conecta una manguera o un aspersor.
>
> Como el ESP32 no entrega la corriente suficiente para alimentar la bomba, se deberá utilizar un relevador o un MOSFET.
>
> El ESP32 mandará la señal de encendido o apagado y el circuito de control se encargará de conectar o cortar la alimentación de la bomba.

**Tipo de actuador**

> La bomba es un actuador de salida porque recibe una señal eléctrica y produce una acción física, que en este caso es mover agua hacia los aspersores.
>
> Podrá encenderse automáticamente al detectar un nivel de riesgo alto o de forma manual desde la aplicación web para realizar pruebas.

**Condiciones de activación**

> La bomba no se encenderá por una sola lectura. El ESP32 primero comparará la información de los diferentes sensores.
>
> La activación podrá ocurrir cuando se detecte una combinación de llama, aumento de temperatura y presencia de humo o gases.
>
> Las condiciones exactas y el tiempo de encendido se definirán después de realizar las pruebas.

**¿Cómo se implementaría?**

> 1. La bomba se conectará a una fuente externa de 5 V que pueda proporcionar la corriente necesaria.
> 2. Se utilizará un relevador o MOSFET para controlar su encendido y apagado.
> 3. El circuito de control se conectará a un pin de salida del ESP32.
> 4. El ESP32 revisará las lecturas de los sensores.
> 5. Si se cumplen las condiciones programadas, enviará la señal para encender la bomba.
> 6. La bomba llevará el agua del recipiente hacia la manguera y los aspersores.
> 7. Se apagará al terminar el tiempo configurado o cuando ya no exista la condición de activación.
> 8. Su estado se enviará mediante MQTT al equipo de monitoreo.

**Entrada**

> La bomba recibe una alimentación de 5 V de corriente directa y necesita tener agua disponible en su entrada.
>
> La orden de encendido o apagado llegará mediante el relevador o MOSFET controlado por el ESP32.

**Salida**

> La salida física será el flujo de agua enviado hacia la manguera o el aspersor.
>
> Dentro del sistema, su estado se mostrará como `encendida` o `apagada` y podrá enviarse al equipo de monitoreo.

**Conexiones de la bomba**

| Conexión        | Tipo           | Función                                         |
|-----------------|----------------|-------------------------------------------------|
| Cable positivo  | Alimentación   | Recibe el voltaje positivo de la fuente de 5 V. |
| Cable negativo  | Alimentación   | Se conecta al negativo de la fuente.            |
| Entrada de agua | Entrada física | Toma el agua del recipiente.                    |
| Salida de agua  | Salida física  | Envía el agua hacia la manguera o aspersor.      |

**Conexión propuesta con módulo relevador**

| Elemento        | Conexión        | Función                                      |
|-----------------|-----------------|----------------------------------------------|
| ESP32           | `GPIO 26`       | Envía la señal de control.                   |
| Relevador       | `IN`            | Recibe la señal del ESP32.                   |
| Relevador       | `VCC`           | Recibe alimentación.                        |
| Relevador       | `GND`           | Se conecta a tierra.                        |
| Positivo fuente | `COM`           | Lleva los 5 V al relevador.                  |
| Positivo bomba  | `NO`            | Recibe corriente cuando el relevador cierra. |
| Negativo bomba  | Negativo fuente | Cierra el circuito de alimentación.          |

> El `GPIO 26` es una propuesta y podrá cambiar al elaborar el diagrama completo.
>
> También se deberá comprobar que el relevador pueda activarse con los 3.3 V que entrega el ESP32.

**Diagrama general de conexión**

> **ESP32 → relevador o MOSFET → bomba de agua → manguera → aspersor**

> La fuente externa alimentará la bomba. Esta no debe conectarse directamente al ESP32 porque podría dañar la tarjeta.

**Funciones y comandos utilizados**

- `pinMode()`: configura el pin de control como salida.
- `digitalWrite()`: enciende o apaga la bomba.
- `HIGH`: coloca el pin en nivel lógico alto.
- `LOW`: coloca el pin en nivel lógico bajo.
- `if`: comprueba si se cumplen las condiciones de activación.
- `millis()`: controla el tiempo de funcionamiento sin detener el programa.
- `Serial.print()`: muestra información en el monitor serial.
- `Serial.println()`: muestra el estado de la bomba y agrega un salto de línea.
- `delay()`: agrega un tiempo de espera durante pruebas sencillas.

**Ejemplo de funcionamiento**

```cpp
#define PIN_BOMBA 26

void setup() {
  Serial.begin(115200);

  pinMode(PIN_BOMBA, OUTPUT);
  digitalWrite(PIN_BOMBA, LOW);

  Serial.println("Control de bomba iniciado");
}

void loop() {
  bool condicionDeRiesgo = false;

  if (condicionDeRiesgo) {
    digitalWrite(PIN_BOMBA, HIGH);
    Serial.println("Bomba encendida");
  } else {
    digitalWrite(PIN_BOMBA, LOW);
    Serial.println("Bomba apagada");
  }

  delay(1000);
}
```

> Algunos relevadores se activan con `LOW` y otros con `HIGH`. Esto deberá revisarse antes de conectar la bomba al sistema completo.

**Prueba individual de la bomba**

> Antes de unirla con los sensores, se probará la bomba por separado.
> - Primero se revisará que la fuente entregue el voltaje y la corriente necesarios
> - Después, se harán periodos cortos de encendido y apagado desde el ESP32.

> También se comprobará el flujo de agua al igual que las conexiones de la manguera

**Características**

> - Trabaja con corriente directa.
> - Utiliza una alimentación aproximada de 5 V.
> - Transporta agua por medio de una manguera.
> - Tiene un tamaño pequeño.
> - Puede utilizarse en prototipos a escala.
> - Se controla mediante un relevador o MOSFET.
> - Necesita una fuente de alimentación externa.
> - Puede activarse de forma automática o manual.
> - Puede conectarse a uno o varios aspersores pequeños.
> - El tiempo de encendido puede controlarse desde el programa.
> - No debe conectarse directamente a un pin del ESP32.

**Precauciones y limitaciones**

> - No se debe conectar la bomba directamente al ESP32.
> - La fuente externa debe entregar la corriente necesaria.
> - El ESP32 y las conexiones deben mantenerse lejos del agua.
> - Los cables y terminales eléctricos deberán estar aislados.
> - Se deberá revisar que las mangueras no tengan fugas.
> - La bomba no debe trabajar sin agua si el modelo no lo permite.
> - No deberá permanecer encendida más tiempo del recomendado.
> - La polaridad se revisará antes de encenderla.
> - Primero se probará de manera independiente.
> - El relevador o MOSFET deberá soportar la corriente de la bomba.
> - La cantidad de agua disponible será limitada por el tamaño del prototipo.
> - Las pruebas se realizarán lejos de cables expuestos y equipos conectados.
> - Este mecanismo es solamente una demostración y no reemplaza un sistema profesional contra incendios.

**Función dentro del proyecto**

> Cuando el ESP32 detecte un nivel de riesgo alto, podrá encenderla para enviar agua hacia los aspersores colocados en la vivienda a escala.

> También podrá encenderse o apagarse manualmente desde la aplicación web, mientras que el estado del dispositivo quedará registrado para saber si se encuentra activado o desactivado.

> Al tratarse de un prototipo experimental, la bomba solamente demostrará una respuesta automática y no sustituirá un sistema certificado de extinción de incendios (Lo que probablemente conlleve a fallos en periodo de pruebas).

# **Servomotor SG90**

**¿Qué es?**

> El SG90 es un servomotor pequeño que permite mover su eje a una posición específica. A diferencia de un motor normal, puede girar hasta cierto ángulo y mantenerse en esa posición.

> En este proyecto se utilizará para abrir y cerrar las puertas de la vivienda a escala.

**¿Cómo funciona?**

> En su interior tiene un motor de corriente directa, varios engranes y un circuito de control. En conjunto, estos elementos permiten mover el eje hasta el ángulo indicado.

> El ESP32 controla el servomotor mediante una señal PWM.

> Para la maqueta se utilizarán principalmente dos posiciones: puerta cerrada y puerta abierta.

**Tipo de actuador**

> El servomotor es un actuador de salida porque recibe una instrucción del ESP32 y la convierte en movimiento.

> Su posición podrá cambiar automáticamente cuando se detecte una situación de riesgo o de forma manual desde la aplicación web.

**Posiciones de referencia**

> Antes de instalarlo se probarán diferentes ángulos para encontrar las posiciones que mejor se adapten a la puerta.

| Estado de la puerta | Ángulo aproximado |
|---------------------|-------------------|
| Cerrada             | 0°                |
| Parcialmente abierta| 45°               |
| Abierta             | 90°               |

> Estos valores son una referencia inicial, dado que los ángulos finales dependerán de la posición del servomotor y de la forma en que se conecte.

**Condiciones de activación**

> En condiciones normales, el servomotor mantendrá la puerta cerrada. Si el sistema detecta un nivel de riesgo alto, el ESP32 cambiará su posición para abrirla.

> También se podrá controlar desde la aplicación web para realizar pruebas o abrirla manualmente.

> La apertura automática dependerá del nivel de riesgo calculado con las lecturas de los sensores y no de una sola medición.

**¿Cómo se implementaría?**

> 1. El servomotor se colocará junto a una puerta de la vivienda a escala.
> 2. Su eje se unirá al mecanismo que abrirá y cerrará la puerta.
> 3. El cable de señal se conectará a un pin GPIO del ESP32.
> 4. El servomotor recibirá alimentación desde una fuente externa de 5 V.
> 5. El ESP32 enviará la señal PWM necesaria para moverlo al ángulo indicado.
> 6. En condiciones normales, la puerta permanecerá cerrada.
> 7. Al detectar un nivel de riesgo alto, el servomotor moverá la puerta a la posición abierta.
> 8. El estado de la puerta se enviará mediante MQTT al equipo de monitoreo.

**Entrada**

> El servomotor recibe alimentación eléctrica y una señal PWM enviada por el ESP32.

> Esta señal controla el ángulo al que debe moverse el eje del servomotor.

**Salida**

> La salida es el movimiento del eje hacia una posición determinada.

**Cables del servomotor**

| Cable                      | Tipo         | Función                                      |
|----------------------------|--------------|----------------------------------------------|
| Rojo                       | Alimentación | Recibe el voltaje positivo de la fuente.     |
| Café o negro               | Tierra       | Se conecta a `GND`.                          |
| Naranja, amarillo o blanco | Señal        | Recibe la señal de control enviada por el ESP32. |

> Los colores pueden cambiar según el fabricante, por lo que se deberán revisar antes de realizar la conexión.

**Conexión propuesta con el ESP32**

| Cable del servomotor | Conexión              | Función                         |
|----------------------|-----------------------|---------------------------------|
| Rojo                 | Fuente externa de `5V`| Alimentación del servomotor.     |
| Café o negro         | `GND`                 | Conexión a tierra.              |
| Señal                | `GPIO 18`             | Control de la posición del eje. |

> El `GPIO 18` es una propuesta y podrá cambiar al realizar el diagrama completo.

> El negativo de la fuente externa también deberá conectarse al `GND` del ESP32 para que ambos compartan la misma referencia.

**Alimentación del servomotor**

> El SG90 trabaja con un voltaje cercano a 5 V, pero no es recomendable alimentarlo directamente desde el ESP32.

> Al moverse puede consumir suficiente corriente para provocar reinicios o fallas en la tarjeta.

> Si se usan varios servomotores, la fuente externa deberá tener la capacidad necesaria para alimentarlos al mismo tiempo.

**Librería utilizada**

> Para controlar el SG90 se utilizará la librería `ESP32Servo`, disponible en el administrador de librerías del programa Arduino IDE.

> Esta librería permite elegir el pin de señal y mover el servomotor indicando el ángulo deseado.

**Funciones y comandos utilizados**

- `#include <ESP32Servo.h>`: agrega la librería para controlar el servomotor.
- `Servo servoPuerta`: crea el objeto que representa al servomotor.
- `attach()`: asigna el pin utilizado para enviar la señal.
- `write()`: mueve el eje al ángulo indicado.
- `read()`: consulta la última posición asignada.
- `detach()`: deja de enviar la señal de control.
- `if`: comprueba si se cumplen las condiciones de activación.
- `Serial.begin()`: inicia la comunicación con el monitor serial.
- `Serial.println()`: muestra el estado de la puerta.
- `delay()`: agrega un tiempo de espera durante las pruebas.
- `millis()`: controla los tiempos sin detener completamente el programa.

**Ejemplo de funcionamiento**

```cpp
#include <ESP32Servo.h>

Servo servoPuerta;

#define PIN_SERVO 18

int posicionCerrada = 0;
int posicionAbierta = 90;

void setup() {
  Serial.begin(115200);

  servoPuerta.attach(PIN_SERVO);
  servoPuerta.write(posicionCerrada);

  Serial.println("Puerta cerrada");
}

void loop() {
  bool condicionDeRiesgo = false;

  if (condicionDeRiesgo) {
    servoPuerta.write(posicionAbierta);
    Serial.println("Puerta abierta");
  } else {
    servoPuerta.write(posicionCerrada);
    Serial.println("Puerta cerrada");
  }

  delay(1000);
}
```

> Las posiciones de apertura y cierre deberán ajustarse de acuerdo con la instalación del servomotor en la maqueta.

**Prueba individual del servomotor**

> Antes de conectarlo a la puerta, se probará el movimiento del servomotor por separado.

> Se utilizarán varios ángulos para conocer su rango real. Después se instalará en la maqueta y se ajustarán las posiciones para evitar que el eje, los engranes o la puerta sean forzados.

**Características**

> - Permite controlar la posición de su eje.
> - Su rango de movimiento es de aproximadamente 0° a 180°.
> - Se controla mediante una señal PWM.
> - Es compatible con el ESP32.
> - Trabaja con una alimentación cercana a 5 V.
> - Tiene un tamaño y peso reducidos.
> - Cuenta con engranes internos.
> - Puede mantener una posición.
> - Es adecuado para mecanismos pequeños.
> - Puede utilizarse para mover puertas en una maqueta.
> - Se puede controlar de forma automática o manual.
> - Es compatible con la librería `ESP32Servo`.

**Precauciones y limitaciones**

> - No es recomendable alimentarlo directamente desde el ESP32.
> - Si se utilizan varios servomotores, será necesaria una fuente externa adecuada.
> - La fuente y el ESP32 deberán compartir la conexión a tierra.
> - La puerta debe moverse libremente para no forzar el servomotor.
> - El eje no debe girarse manualmente mientras esté conectado.
> - El rango real puede cambiar según el fabricante.
> - Algunos modelos SG90 no alcanzan los 180°.
> - Una puerta pesada puede impedir su movimiento.
> - Los movimientos constantes aumentan el consumo de corriente.
> - Los cables deberán sujetarse para evitar desconexiones.
> - Su uso dentro del proyecto será solamente demostrativo.
> - No reemplaza un mecanismo profesional de apertura de emergencia.

**Función dentro del proyecto**

> El servomotor se encargará de abrir y cerrar una puerta de la vivienda a escala. Si el sistema detecta un nivel de riesgo alto, el ESP32 lo moverá para representar la apertura de una ruta de salida.

> La puerta también podrá controlarse manualmente desde la aplicación web. Después de cada movimiento, su estado se enviará mediante MQTT al equipo de monitoreo.

> De esta manera, el prototipo no solo mostrará las condiciones detectadas por los sensores, sino que también realizará una acción física como respuesta.

# **LEDs indicadores**

**¿Qué son?**

> Los LEDs son componentes que producen luz al recibir corriente eléctrica, suelen ser utilizados para mostrar estados, avisos o cambios dentro de un sistema.

> En este proyecto se usarán tres LEDs de diferente color para indicar el nivel de riesgo calculado por el ESP32 al obtener las lecturas percibidas por los sensores integrados al dispositivo.

**¿Cómo funcionan?**

> Un LED permite el paso de corriente en una sola dirección. Si se conecta con la polaridad correcta y recibe el voltaje adecuado, se enciende.

> El ESP32 controlará cada LED desde uno de sus pines digitales, dependiendo de las lecturas de los sensores, encenderá el color que corresponda dependiendo del estado en que se encuentre el sistema.

> Cada LED deberá tener su propia resistencia para evitar daños o quemar los leds en el periodo de pruebas.

**Tipo de actuador**

> Los LEDs son actuadores de salida visual porque reciben una señal del ESP32 y la muestran por medio de luz.

> Su función será indicar rápidamente si el sistema se encuentra en estado normal, de precaución o de alerta.

**Colores y estados propuestos**

| Color    | Estado     | Significado                                              |
|----------|------------|----------------------------------------------------------|
| Verde    | Normal     | No se detectan señales relacionadas con un incendio.     |
| Amarillo | Precaución | Se encontró un cambio que debe mantenerse en observación.|
| Rojo     | Alerta     | Se detectaron una o varias condiciones de riesgo.        |

> Los estados finales dependerán de los valores obtenidos durante la calibración y las pruebas.

**Condiciones de activación**

> El LED verde permanecerá encendido mientras las lecturas se encuentren dentro de los valores normales.

> El amarillo se encenderá cuando algún sensor registre un cambio importante, como un aumento de temperatura o mayor presencia de humo.

> El rojo indicará que se detectó una combinación de señales relacionadas con un posible incendio, como humo, temperatura alta y presencia de llama.

> Las condiciones exactas se definirán después de probar los sensores y programar el cálculo del nivel de riesgo.

**¿Cómo se implementarían?**

> 1. Se utilizarán tres LEDs para representar los estados normal, precaución y alerta.
> 2. Cada LED se conectará a un pin digital del ESP32.
> 3. Se colocará una resistencia en serie con cada LED.
> 4. El ESP32 analizará las lecturas de los sensores.
> 5. De acuerdo con el nivel de riesgo, encenderá el color correspondiente.
> 6. Si las condiciones cambian, el indicador se actualizará automáticamente.
> 7. El estado también se enviará mediante MQTT al equipo de monitoreo.

**Entrada**

> Cada LED recibe una señal eléctrica desde un pin GPIO del ESP32.

> Esta señal determina si debe estar encendido o apagado.

**Salida**

> La salida es la luz producida por el LED.

> El color permitirá conocer el estado del sistema sin tener que abrir la aplicación web.

**Terminales del LED**

| Terminal    | Identificación   | Función                               |
|-------------|------------------|---------------------------------------|
| Ánodo       | Pata larga       | Recibe el voltaje positivo.           |
| Cátodo      | Pata corta       | Se conecta a tierra.                  |
| Parte plana | Marca de apoyo   | Ayuda a identificar el lado negativo. |

> La resistencia puede colocarse antes o después del LED, siempre que quede conectada en serie.

**Conexión propuesta con el ESP32**

| Componente  | ESP32     | Función                       |
|-------------|-----------|-------------------------------|
| LED verde   | `GPIO 25` | Indica el estado normal.      |
| LED amarillo| `GPIO 32` | Indica precaución.            |
| LED rojo    | `GPIO 33` | Indica alerta.                |
| Cátodos     | `GND`     | Conexión común a tierra.      |

> Cada LED llevará una resistencia de 220 Ω o 330 Ω para limitar la corriente.

> Los pines son una propuesta y podrán cambiar al realizar el diagrama completo.

**Diagrama general de conexión**

> **GPIO del ESP32 → resistencia → ánodo del LED → cátodo del LED → GND**

> Cada LED necesita su propia resistencia. No se debe utilizar una sola resistencia para varios LEDs.

**Funciones y comandos utilizados**

- `pinMode()`: configura los pines de los LEDs como salidas.
- `digitalWrite()`: enciende o apaga cada LED.
- `HIGH`: coloca el pin en nivel alto y enciende el LED.
- `LOW`: coloca el pin en nivel bajo y apaga el LED.
- `if`: comprueba una condición.
- `else if`: revisa otro estado posible.
- `else`: establece qué hacer cuando las condiciones anteriores no se cumplen.
- `Serial.begin()`: inicia la comunicación con el monitor serial.
- `Serial.println()`: muestra el estado actual del sistema.
- `delay()`: agrega una pausa durante las pruebas.
- `millis()`: permite hacer parpadear un LED sin detener las demás funciones.

**Ejemplo de funcionamiento**

```cpp
#define LED_VERDE 25
#define LED_AMARILLO 32
#define LED_ROJO 33

void setup() {
  Serial.begin(115200);

  pinMode(LED_VERDE, OUTPUT);
  pinMode(LED_AMARILLO, OUTPUT);
  pinMode(LED_ROJO, OUTPUT);

  digitalWrite(LED_VERDE, LOW);
  digitalWrite(LED_AMARILLO, LOW);
  digitalWrite(LED_ROJO, LOW);
}

void loop() {
  int nivelRiesgo = 0;

  if (nivelRiesgo == 0) {
    digitalWrite(LED_VERDE, HIGH);
    digitalWrite(LED_AMARILLO, LOW);
    digitalWrite(LED_ROJO, LOW);

    Serial.println("Estado normal");
  }
  else if (nivelRiesgo == 1) {
    digitalWrite(LED_VERDE, LOW);
    digitalWrite(LED_AMARILLO, HIGH);
    digitalWrite(LED_ROJO, LOW);

    Serial.println("Estado de precaución");
  }
  else {
    digitalWrite(LED_VERDE, LOW);
    digitalWrite(LED_AMARILLO, LOW);
    digitalWrite(LED_ROJO, HIGH);

    Serial.println("Estado de alerta");
  }

  delay(1000);
}
```

> La variable `nivelRiesgo` se utiliza solamente para mostrar el funcionamiento. Más adelante, su valor se calculará con las lecturas de los sensores.

**Prueba individual de los LEDs**

> Antes de relacionarlos con los sensores, se encenderá y apagará cada LED por separado para revisar su polaridad y conexión.

> Después se probarán los tres estados para comprobar que solo permanezca encendido el color correspondiente. También se revisará que las resistencias limiten correctamente la corriente.

**Características**

> - Muestran el estado del sistema por medio de luz.
> - Consumen poca corriente.
> - Pueden controlarse desde los pines digitales del ESP32.
> - Se encuentran disponibles en varios colores.
> - Tienen un tamaño pequeño.
> - Son económicos y fáciles de conseguir.
> - Necesitan una resistencia para limitar la corriente.
> - Pueden permanecer encendidos, apagados o parpadear.
> - Permiten diferenciar varios niveles de riesgo.
> - No necesitan una librería adicional.
> - Funcionan como aviso local.

**Precauciones y limitaciones**

> - Se debe respetar la polaridad de cada LED.
> - Cada uno deberá llevar una resistencia.
> - No deben conectarse a un voltaje mayor al recomendado.
> - No se debe superar la corriente permitida por los pines del ESP32.
> - El aviso puede pasar por alto si no hay una persona cerca.
> - Una luz muy intensa puede dificultar su visualización.
> - Los LEDs no realizan mediciones.
> - No reemplazan una alarma profesional.
> - Las conexiones deberán hacerse con el ESP32 apagado.

**Función dentro del proyecto**

> Los LEDs mostrarán directamente el nivel de riesgo detectado por el sistema, mientras que el verde indicará que las condiciones son normales, el amarillo señalará que el usuario debe tener precaución y el rojo mostrará una posible situación de incendio.

> De esta forma se podrá revisar el estado del prototipo sin entrar a la aplicación web, dado que cada cambio también podrá registrarse y enviarse mediante MQTT al equipo de monitoreo.

# **Pantalla OLED I2C**

**¿Qué es?**

> La pantalla OLED I2C es un componente de salida que permite mostrar texto, números, símbolos y gráficos sencillos. Sus píxeles generan su propia luz, por lo que no necesita iluminación trasera.

> En este proyecto se utilizará para mostrar las lecturas de los sensores, el nivel de riesgo, el estado de la conexión y las alertas del sistema.

**¿Cómo funciona?**

> La pantalla recibe la información procesada por el ESP32 y la muestra de forma visual, mientras que la comunicación se realiza mediante I2C, utilizando una línea para enviar los datos y otra para sincronizarlos.

> Durante el funcionamiento normal mostrará las mediciones principales, dependiendo de si el sistema detecta una situación de riesgo, el contenido cambiará para mostrar una advertencia.

> Antes de programarla se revisará el controlador que utiliza la pantalla para elegir las librerías adecuadas.

**Tipo de actuador**

> La pantalla OLED es un actuador de salida visual porque muestra la información que recibe del ESP32.

> No mide las condiciones del ambiente ni controla otros componentes, solamente permite visualizar el estado del sistema de manera local.

**Información que podrá mostrar**

- Temperatura.
- Humedad.
- Presencia de humo o gases.
- Detección de llama.
- Nivel de riesgo.
- Estado de la conexión Wi-Fi.
- Estado de la conexión MQTT.
- Disponibilidad de la ubicación.
- Estado de la bomba de agua.
- Estado de las puertas.
- Mensajes de alerta.

> La información final se elegirá después de probar los sensores y darle organización a la interfaz.

**Estados propuestos**

> En condiciones normales, la pantalla mostrará las lecturas principales y un mensaje indicando que el sistema funciona correctamente.

> Si algún sensor registra un cambio importante, aparecerá un aviso de precaución junto con la variable que presentó la alteración.

> Cuando se detecte una posible situación de incendio, la alerta actuará de manera prioritaria sobre las mediciones normales.

**¿Cómo se implementaría?**

> 1. La pantalla se conectará al ESP32 mediante comunicación I2C.
> 2. Al encender el prototipo, mostrará un mensaje de inicio.
> 3. El ESP32 procesará las lecturas recibidas de los sensores.
> 4. Los datos principales se enviarán a la pantalla.
> 5. El contenido cambiará de acuerdo con el nivel de riesgo.
> 6. Los mensajes de alerta tendrán prioridad sobre la información normal.
> 7. Si falla la conexión Wi-Fi o MQTT, se mostrará un aviso sin detener el funcionamiento local.

**Entrada**

> La pantalla recibe textos, números y otros datos enviados por el ESP32 mediante I2C.

> Esta información corresponde a las mediciones y al estado general del prototipo.

**Salida**

> La salida es la información visual que aparece en la pantalla.

> Esto permitirá revisar el estado del sistema sin necesidad de entrar a la aplicación web.

**Pines de conexión**

| Pin   | Tipo            | Función                                      |
|-------|-----------------|----------------------------------------------|
| `VCC` | Entrada         | Proporciona alimentación a la pantalla.      |
| `GND` | Tierra común  | Conecta la pantalla a tierra.                |
| `SDA` | Datos           | Transporta la información mediante I2C.      |
| `SCL` | Reloj           | Sincroniza la comunicación I2C.              |

> Algunos módulos pueden tener pines adicionales, para revisar posibles cambios de estructura dependiendo del equipo.

**Conexión propuesta con el ESP32**

| OLED I2C | ESP32     | Función          |
|----------|-----------|------------------|
| `VCC`    | `3V3`     | Alimentación.    |
| `GND`    | `GND`     | Tierra común.    |
| `SDA`    | `GPIO 21` | Línea de datos.  |
| `SCL`    | `GPIO 22` | Línea de reloj.  |

> Los pines podrán cambiar cuando se prepare el diagrama completo.

> Antes de conectar la pantalla se deberá comprobar el voltaje aceptado por el módulo.

**Dirección I2C**

> La pantalla utiliza una dirección I2C para que el ESP32 pueda identificarla entre los dispositivos conectados.

> Esta dirección se revisará con un programa de búsqueda I2C antes de cargar el código definitivo.

**Librerías utilizadas**

> Si la pantalla utiliza un controlador SSD1306, se podrán instalar las siguientes librerías desde el programa Arduino IDE:

- `Adafruit GFX Library`.
- `Adafruit SSD1306`.

> `Adafruit GFX` permite trabajar con textos y gráficos, mientras que `Adafruit SSD1306` se encarga del control de la pantalla.

**Funciones y comandos utilizados**

- `#include <Wire.h>`: agrega la librería para utilizar I2C.
- `#include <Adafruit_GFX.h>`: agrega las funciones para textos y gráficos.
- `#include <Adafruit_SSD1306.h>`: permite controlar la pantalla.
- `Wire.begin()`: inicia la comunicación I2C.
- `display.begin()`: inicia el funcionamiento de la pantalla.
- `display.clearDisplay()`: borra el contenido anterior.
- `display.setTextColor()`: selecciona el color del texto.
- `display.setCursor()`: indica dónde comenzará el texto.
- `display.print()`: agrega texto o valores.
- `display.println()`: agrega información con un salto de línea.
- `display.display()`: muestra el contenido preparado.
- `if`: cambia la información según el estado del sistema.
- `millis()`: controla el tiempo entre actualizaciones.

**Ejemplo de funcionamiento**

```cpp
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

Adafruit_SSD1306 pantalla(-1);

void setup() {
  Serial.begin(115200);
  Wire.begin(21, 22);

  if (!pantalla.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println("No se pudo iniciar la pantalla OLED");

    while (true) {
    }
  }

  pantalla.clearDisplay();
  pantalla.setTextColor(SSD1306_WHITE);
  pantalla.setCursor(0, 0);
  pantalla.println("Sistema IoT");
  pantalla.println("Iniciando...");
  pantalla.display();
}

void loop() {
  float temperatura = 28.5;
  bool condicionDeRiesgo = false;

  pantalla.clearDisplay();
  pantalla.setCursor(0, 0);

  if (condicionDeRiesgo) {
    pantalla.println("ALERTA");
    pantalla.println("Posible incendio");
  } else {
    pantalla.println("Estado normal");
    pantalla.print("Temperatura: ");
    pantalla.println(temperatura);
  }

  pantalla.display();
  delay(2000);
}
```

> Este ejemplo deberá ajustarse de acuerdo con el controlador de la pantalla utilizada y la información que se quiera mostrar.

**Prueba individual de la pantalla**

> Primero se mostrará un mensaje fijo para revisar la alimentación, la comunicación I2C y la dirección del módulo.

> Después se utilizarán valores que cambien con el tiempo para comprobar que la pantalla se actualice sin afectar las demás funciones del ESP32.

**Características**

> - Muestra textos, números, símbolos y gráficos sencillos.
> - Utiliza comunicación I2C.
> - Requiere pocas conexiones.
> - No necesita iluminación trasera.
> - Permite organizar diferentes pantallas de información.
> - Tiene buena visibilidad y contraste.
> - Su consumo de energía es bajo.
> - Puede compartir el bus I2C con otros dispositivos.
> - Muestra mediciones y mensajes de alerta.
> - Es compatible con librerías de Arduino IDE.
> - No necesita una entrada analógica.
> - Su contenido puede cambiar durante el funcionamiento.

**Precauciones y limitaciones**

> - Se deberá revisar el voltaje de alimentación.
> - La dirección I2C puede variar entre módulos.
> - Las librerías deben coincidir con el controlador de la pantalla.
> - La información deberá organizarse para que sea fácil de leer.
> - La pantalla se mantendrá lejos del agua utilizada por la bomba.
> - Se deberá proteger contra golpes y salpicaduras.
> - Actualizarla con demasiada frecuencia puede provocar parpadeos.
> - Solamente muestra información de manera local.
> - No reemplaza los avisos enviados a la aplicación web.
> - Las alertas deberán mostrarse antes que las mediciones normales.

**Función dentro del proyecto**

> La pantalla OLED mostrará las mediciones, los estados y las alertas del prototipo. También permitirá revisar si el sistema mantiene conexión Wi-Fi y comunicación con MQTT.

> Si se detecta un posible incendio, aparecerá un mensaje de alerta junto con las condiciones encontradas. De esta forma, la pantalla trabajará como complemento de los LEDs y de la aplicación web.

## Referencia

> Chow Díaz, S. Y., Cuthbert Moreno, A. A., Sambola, D.-M., & Flores-Pacheco, J. A. (2023). Sistema de alerta temprana para la reducción de riesgos de incendios en viviendas. *Nexo Revista Científica, 36*(03), 241–251. https://doi.org/10.5377/nexo.v36i03.16446

> Aosong Electronics Co., Ltd. (s. f.). *DHT11 humidity and temperature sensor datasheet*. https://www.mouser.com/datasheet/2/758/DHT11-Technical-Data-Sheet-Translated-Version-1143054.pdf

> Espressif Systems. (s. f.). *ESP32 series datasheet*. https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf
