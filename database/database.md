# Introduction to Databases
```{figure} ../figures/early_database.png
---
width: 100%
---
Database in the early days: books and library catalogues.
```
Databases have come a long way from the early methods of organizing information in books and libraries. In a book, information is systematically arranged into a table of contents, sections, chapters, and an index, which helps readers quickly locate specific information. Similarly, databases organize data into tables, which are akin to the chapters and sections of a book. Each table contains rows and columns that represent individual records and fields.

In the context of a library, databases can be compared to the prefilled catalogue cards and the drawers or cabinets that store these cards. Each card in the catalogue represents a record in the database, containing information about a specific book, such as the title, author, and subject. The drawers or cabinets that hold these cards are analogous to the database itself, which stores and organizes all the records in a structured manner.

```{admonition} What is a Database?
:class: info
A database is a collection of data or information that is organized, stored, and can be accessed using a software called Database Management System (DBMS).
A DBMS extracts information from the database in response to queries. In materials informatics, databases are used to store and manage vast amounts of complex data related to materials properties, structures, and performance.
```

## Types of Databases
There are several types of databases, each designed for specific use cases and requirements. Some common types of databases include relational databases and non-relational databases.

### SQL Databases (Relational Databases)

```{figure} ../figures/relational_database.png
---
width: 60%
---
Relational database structure: tables with rows and columns.
```

Relational databases store data in tables with rows and columns, and use Structured Query Language (SQL) to interact with the data. Each table contains records (rows) and fields (columns). Relationships between tables are established using keys, such as primary keys and foreign keys. Examples of relational databases include MySQL, PostgreSQL, and SQLite. 

Relational databases are ideal for storing structured data, such as experimental data, material properties, or computational results, where relationships between different data entities need to be maintained.

### NoSQL Databases

```{figure} ../figures/nosql.png
---
width: 60%
---
Different types of the NoSQL database structure: key-value, document, graph, or column-based.
```
NoSQL databases (or Non-relational databases) store data in a non-tabular format, such as key-value pairs, document stores, or graph databases. They are designed to handle unstructured or semi-structured data, such as text, images, and videos. Examples of NoSQL databases include MongoDB, Cassandra, and Neo4j.

There are several types of NoSQL databases, each designed to handle different types of data and use cases. Key-Value Stores are one type of NoSQL database where data is stored as a collection of key-value pairs. Each key is unique, and it is used to retrieve the corresponding value. This type of database is suitable for storing simple data structures. Examples of key-value stores include Redis and DynamoDB.

Another type of NoSQL database is Document Stores. In these databases, data is stored in documents, which are typically JSON or XML objects. Document stores are ideal for storing complex data structures and allow for flexible schemas, meaning that different documents in the same collection can have different structures. Examples of document stores include MongoDB and CouchDB.

Graph Databases are designed to store and query graph data, such as social networks or molecular structures. They use nodes to represent entities, edges to represent relationships between entities, and properties to store information about the nodes and edges. This structure allows for efficient querying of complex relationships. Examples of graph databases include Neo4j and ArangoDB.

Column-Based Stores are another type of NoSQL database where data is stored in columns rather than rows. This format is particularly efficient for read-heavy operations and analytical queries, as it allows for quick retrieval of data from specific columns. Examples of column-based stores include Apache Cassandra and HBase.

Each type of NoSQL database has its strengths and is suited to different types of applications. The choice of database type depends on the specific requirements of the application, such as data structure, scalability, and performance.

## SQL vs. NoSQL Databases
The comparison  between SQL and NoSQL databases is summarized in the table below:
| Feature           | SQL Databases                                         | NoSQL Databases                                           |
|-------------------|-------------------------------------------------------|-----------------------------------------------------------|
| Data Model        | Relational (tables with rows and columns)             | Non-relational (key-value, document, graph, or column-based)|
| Schema            | Fixed schema; changes require migrations              | Flexible or schema-less; adapts to evolving data needs    |
| Query Language    | SQL (Structured Query Language)                       | Varies (e.g., MongoDB Query Language, CQL for Cassandra)  |
| Scalability       | Vertical scaling (adding more power to a single server)| Horizontal scaling (adding more servers)                  |
| Consistency       | Strong consistency enforced via ACID properties       | Often eventual consistency; trade-offs between consistency and performance |
| Use Cases         | Transactions, complex queries, structured data        | Big data, real-time analytics, unstructured/semi-structured data |
| Examples          | MySQL, PostgreSQL, SQLite                             | MongoDB, Cassandra, Redis, Neo4j                           |