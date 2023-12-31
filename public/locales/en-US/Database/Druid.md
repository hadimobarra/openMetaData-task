# Druid

In this section, we provide guides and references to use the Druid connector.

## Requirements

You can find further information on the Druid connector in the [docs](https://docs.open-metadata.org/connectors/database/druid).

## Connection Details

$$section
### Scheme $(id="scheme")

SQLAlchemy driver scheme options.
$$

$$section
### Username $(id="username")

Username to connect to Druid. This user should have privileges to read all the metadata in Druid.
$$

$$section
### Password $(id="password")

Password to connect to Druid.
$$

$$section
### Host Port $(id="hostPort")

Host and port of the Druid service.
$$

$$section
### Database Name $(id="databaseName")

In OpenMetadata, the Database Service hierarchy works as follows:

```
Database Service > Database > Schema > Table
```

In the case of Druid, we won't have a Database as such. If you'd like to see your data in a database named something other than `default`, you can specify the name in this field.
$$

$$section
### Connection Options $(id="connectionOptions")

Additional connection options to build the URL that can be sent to service during the connection.
$$

$$section
### Connection Arguments $(id="connectionArguments")

Additional connection arguments such as security or protocol configs that can be sent to service during connection.
$$
