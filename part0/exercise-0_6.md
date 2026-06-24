sequenceDiagram
participant browser
participant server

    Note right of browser: On submit, new note is pushed to notes array and redrawNotes() is called before making HTTP request to server.
    Note right of browser: New note is pushed to exisiting notes instance instead of fetching data.json again and refreshing page.

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note left of server: "{content: "test", date: "2026-06-24T19:12:20.376Z"}"
    activate server
    server-->>browser: {"message":"note created"}
    deactivate server

    Note right of browser: No re-render is executed, therefore no GET request for the HTML document or subsequent GET requests for JS or CSS files initiated.
