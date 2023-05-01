![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

## What is Unit of Work?
Unit of Work is a design pattern used in applications that handle data persistence. It is responsible for managing transactions and ensuring that all operations related to a specific unit of work are completed successfully or undone if an error occurs.

In simple terms, the Unit of Work is an object that stores all changes made to one or more entities. It manages the life cycle of these entities and ensures they are saved to the database in a single transaction.

## Example

```js 
      // start transaction
      await Uow.startTrans();
      data.password = await PasswordHashUtil.generate(data.password);
      const createdManager = await this.userRep.save(userMapper);
      try {
        await this.createDocumentOrFailUseCase.execute({
          document: data.document,
          document_type: data.document_type,
          user_id: createdManager.id,
        });
      } catch (createDocumentException) {
        // rollback
        await Uow.rollback();
        throw createDocumentException;
      }
      // commit
      await Uow.commit();
      return createdManager;
    }
  }
```
The provided code uses a class called Uow to manage transactions. When Uow.startTrans() is called, a new transaction is started. Then, some operations are performed, such as generating a user's password hash, creating a new user, and creating a document for that user. If an exception occurs while creating the document, the transaction is rolled back (Uow.rollback()) and the exception is thrown again. Otherwise, the transaction is committed (Uow.commit()) and the created user is returned.

This approach ensures that all operations are either successfully completed or undone in case of failure, preventing inconsistencies in the database.

To use the Uow class in other parts of the code, you need to create an instance of it and inject it where needed.
