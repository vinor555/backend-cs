# CSGO Backend API

## Descripción
Esta aplicación es una API backend que extrae datos de la API externa de CSGO, los almacena en una base de datos PostgreSQL y los expone mediante endpoints. Se incluyen endpoints para skins, agents, crates y keys (este último protegido mediante autenticación). Además, se puede exportar la información a XML.

## Requisitos
- Docker y Docker Compose

## Uso

1. Clona el repositorio.
2. Configura las variables de entorno en el archivo `.env` (esto es opcional, ya que docker-compose inyecta las variables).
3. Levanta la aplicación con Docker Compose:
   ```bash
   docker compose up --build


## Docker

1. docker exec -it backend-db-1 psql -U csgo_user -d csgo_db
2. docker compose logs app


# Documentación de Endpoints

Esta API permite consultar información sobre skins, agents, crates y keys del juego CSGO, así como exportar dichos datos en formato XML. A continuación se detallan los endpoints disponibles, sus parámetros y ejemplos de uso.

---

## 1. GET /skins

**Descripción:**  
Obtiene la lista completa de skins almacenadas en la base de datos. Se puede filtrar por crate mediante el parámetro de consulta `crates`.

**URL de Ejemplo:**

- Listar todas las skins:  
  `GET http://localhost:3000/skins`

- Filtrar skins por crate (por ejemplo, "Kilowatt Case"):  
  `GET http://localhost:3000/skins?crates=Kilowatt Case`

**Respuesta (JSON):**  
Un arreglo de objetos, donde cada objeto representa una skin con los siguientes campos:
- `id`: Identificador único.
- `name`: Nombre de la skin.
- `description`: Descripción de la skin.
- `crates`: Arreglo de objetos (cada uno con `id`, `name` e `image`) relacionados con la skin.
- `team`: Nombre del equipo asociado (si corresponde).
- `image`: URL de la imagen de la skin.

---

## 2. GET /agents

**Descripción:**  
Devuelve la lista completa de agents disponibles en la base de datos.

**URL de Ejemplo:**

- Listar todos los agents:  
  `GET http://localhost:3000/agents`

**Respuesta (JSON):**  
Un arreglo de objetos, donde cada objeto representa un agent con los siguientes campos:
- `id`: Identificador único.
- `name`: Nombre del agent.
- `description`: Descripción del agent.
- `team`: Nombre del equipo asociado.
- `image`: URL de la imagen del agent.

---

## 3. GET /crates

**Descripción:**  
Obtiene la lista de crates (cajas, cápsulas, cajas de graffiti, etc.) almacenados en la base de datos.

**URL de Ejemplo:**

- Listar todos los crates:  
  `GET http://localhost:3000/crates`

**Respuesta (JSON):**  
Un arreglo de objetos, donde cada objeto representa un crate con los siguientes campos:
- `id`: Identificador único.
- `name`: Nombre del crate.
- `description`: Descripción (puede ser `null`).
- `image`: URL de la imagen del crate.

---

## 4. GET /keys

**Descripción:**  
Retorna la lista completa de keys disponibles en la base de datos.  
**Nota:** Este endpoint está protegido mediante autenticación básica, por lo que es necesario enviar el header de autorización.

**Autenticación:**  
Se requiere enviar el header `Authorization` con el formato:

Authorization: `Basic Auth`

`admin:admin123` (o las credenciales configuradas).


**URL de Ejemplo:**

- Listar todos los crates:  
  `GET http://localhost:3000/keys`


**Respuesta (JSON):**  
Un arreglo de objetos, donde cada objeto representa un crate con los siguientes campos:
- `id`: Identificador único.
- `name`: Nombre de la key.
- `description`: Descripción de la key.
- `crates`: Arreglo de objetos (cada uno con id, name e image) asociados a la key.
- `image`: URL de la imagen de la key.


---

## 5. GET /export

**Descripción:**  
Exporta la información de una categoría en formato XML. Se debe indicar el tipo de datos a exportar mediante el parámetro de consulta `type`.

**Parámetro:**

`type`: Debe ser uno de los siguientes valores:

- `skins`
- `agents`
- `crates`
- `keys`

**URL de Ejemplo:**

- Listar todos los crates:  
  `GET http://localhost:3000/export?type=skins`

**Respuesta (JSON):**  
Un documento XML generado a partir de los datos consultados. Ejemplo para skins:
<items>
  <skin>
    <id>...</id>
    <name>...</name>
    <description>...</description>
    <crates>...</crates>
    <team>...</team>
    <image>...</image>
  </skin>
</items>