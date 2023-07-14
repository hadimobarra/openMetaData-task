# PinotDB

In this section, we provide guides and references to use the PinotDB connector.

## Requirements

You can find further information on the PinotDB connector in the [docs](https://docs.open-metadata.org/connectors/database/pinotdb).

## Connection Details

$$section
### Scheme $(id="scheme")

SQLAlchemy driver scheme options.
$$

$$section
### Username $(id="username")

username to connect to the PinotDB. This user should have privileges to read all the metadata in PinotDB.
$$

$$section
### Password $(id="password")

password to connect to the PinotDB.
$$

$$section
### Host Port $(id="hostPort")

Host and port of the PinotDB service. E.g., `http://localhost:8099`.
$$

$$section
### Pinot Controller Host $(id="pinotControllerHost")

Pinot Broker Host and Port of the data source.
$$

$$section
### Database $(id="database")

Database of the data source. This is an optional parameter, if you would like to restrict the metadata reading to a single database. When left blank, the OpenMetadata Ingestion attempts to scan all the databases.
$$

$$section
### Connection Options $(id="connectionOptions")

Additional connection options to build the URL that can be sent to service during the connection.
$$

$$section
### Connection Arguments $(id="connectionArguments")

Additional connection arguments such as security or protocol configs that can be sent to service during connection.
$$
