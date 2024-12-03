const samplePrintedFiles = [
    {
        page: 1,
        place: "B4-01",
        copies: 5,
        date: new Date("11-12-2024"),
        file: new File(
        ["This is the content of the file"],  // File content (as a string or Blob)
        "example_1.txt",                        // File name
        {
            type: "text/plain",                 // MIME type
            lastModified: new Date(),           // Last modified date (optional)
        }
        )
    },
    {
        page: 1,
        place: "B4-01",
        copies: 5,
        date: new Date("11-12-2024"),
        file: new File(
        ["This is the content of the file"],  // File content (as a string or Blob)
        "example_2.txt",                        // File name
        {
            type: "text/plain",                 // MIME type
            lastModified: new Date(),           // Last modified date (optional)
        }
        )
    },
    {
        page: 1,
        place: "B4-01",
        copies: 5,
        date: new Date("11-12-2024"),
        file: new File(
        ["This is the content of the file"],  // File content (as a string or Blob)
        "example_3.txt",                        // File name
        {
            type: "text/plain",                 // MIME type
            lastModified: new Date(),           // Last modified date (optional)
        }
        )
    },
    {
        page: 1,
        place: "B4-01",
        copies: 5,
        date: new Date("11-12-2024"),
        file: new File(
        ["This is the content of the file"],  // File content (as a string or Blob)
        "example_4.txt",                        // File name
        {
            type: "text/plain",                 // MIME type
            lastModified: new Date(),           // Last modified date (optional)
        }
        )
    },
    {
        page: 1,
        place: "B4-01",
        copies: 5,
        date: new Date("11-12-2024"),
        file: new File(
        ["This is the content of the file"],  // File content (as a string or Blob)
        "example_5.txt",                        // File name
        {
            type: "text/plain",                 // MIME type
            lastModified: new Date(),           // Last modified date (optional)
        }
        )
    },
    ]

const sampleWaitingFiles = [
    {
        page: 5,
        place: "B4-01",
        copies: 1,
        uploaded_date: new Date("11-12-2024"),
        is_printed: true,
        waiting_minutes: null,
        printed_time: new Date(),
        file: new File(
        ["This is the content of the file"],  // File content (as a string or Blob)
        "Capstone_Project_Autumn_2023.pdf",   // File name
        {
            type: "pdf",                        // MIME type
            lastModified: new Date(),           // Last modified date (optional)
        }
        )
    },
    {
        page: 5,
        place: "B4-01",
        copies: 1,
        uploaded_date: new Date("11-12-2024"),
        is_printed: true,
        waiting_minutes: null,
        printed_time: new Date(),
        file: new File(
        ["This is the content of the file"],  // File content (as a string or Blob)
        "Capstone_Project_Autumn_2023_Capstone_Project_Autumn_2023.pdf",   // File name
        {
            type: "pdf",                        // MIME type
            lastModified: new Date(),           // Last modified date (optional)
        }
        )
    },
    {
        page: 5,
        place: "B4-01",
        copies: 1,
        uploaded_date: new Date("11-12-2024"),
        is_printed: false,
        waiting_minutes: 10,
        printed_time: null,
        file: new File(
        ["This is the content of the file"],  // File content (as a string or Blob)
        "Capstone_Project_Autumn_2023.pdf",   // File name
        {
            type: "pdf",                        // MIME type
            lastModified: new Date(),           // Last modified date (optional)
        }
        )
    },
    {
        page: 5,
        place: "B4-01",
        copies: 1,
        uploaded_date: new Date("11-12-2024"),
        is_printed: false,
        waiting_minutes: 5,
        printed_time: null,
        file: new File(
        ["This is the content of the file"],  // File content (as a string or Blob)
        "Capstone_Project_Autumn_2023.pdf",   // File name
        {
            type: "pdf",                        // MIME type
            lastModified: new Date(),           // Last modified date (optional)
        }
        )
    },
    ]

const sampleAllowedFormats = ["pdf", "ppt", "pptx", "doc", "docx", "image", "png", "jpeg", "jpg", "txt"];

export {samplePrintedFiles, sampleWaitingFiles, sampleAllowedFormats}