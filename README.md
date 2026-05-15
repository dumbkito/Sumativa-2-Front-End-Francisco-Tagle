# Sumativa-2-Front-End-Francisco-Tagle
# Vibe: Plataforma de Experiencias

Este proyecto ha sido desarrollado como parte de la **Evaluación Sumativa N°2** para la asignatura de **Desarrollo Front End** en **INACAP Maipú** [cite: 1, 68, 69].

## Descripción del Proyecto
**Vibe** es una aplicación web funcional inspirada en la estética minimalista de Airbnb [cite: 10]. Permite la gestión de actividades mediante el uso intensivo de JavaScript para la manipulación del DOM y estructuras de datos [cite: 5, 7].

## Requisitos Técnicos Implementados
* **Formulario HTML**: Incluye campos de texto, números y selección con validaciones de campos obligatorios [cite: 15].
* **Gestión de Datos**: Uso de un arreglo de objetos para almacenar, mostrar y eliminar experiencias dinámicamente [cite: 16].
* **Seguridad**: Implementación de funciones de sanitización para prevenir ataques XSS al renderizar datos del usuario [cite: 11, 18].
* **Modularidad**: Separación de responsabilidades en funciones reutilizables como `renderCards()` y `sanitize()` [cite: 12, 17].

## Uso de IA (Documentación Obligatoria)
Conforme a la rúbrica, se utilizaron herramientas de Inteligencia Artificial para las siguientes tareas [cite: 13, 22, 56]:

1.  **Validación de Datos**: Generación de lógica para asegurar que las entradas de precio sean valores numéricos válidos [cite: 19, 59].
2.  **Seguridad Web**: Consultoría sobre métodos efectivos para evitar el uso de `innerHTML` peligroso y preferir `textContent` para la sanitización de strings [cite: 19, 61].
3.  **Refactorización**: Optimización de la función de renderizado para limpiar el contenedor del DOM de forma eficiente antes de cada actualización [cite: 19, 60].

## Previsualización de la Interfaz
La aplicación presenta un diseño limpio con los siguientes elementos:
* Barra de navegación con logo distintivo.
* Panel de administración para la publicación de nuevas experiencias.
* Grilla dinámica de tarjetas con categorías y precios formateados.

---
© 2026 Evaluación Sumativa N°2 - Ingeniería Informática, INACAP Maipú [cite: 68, 72].
