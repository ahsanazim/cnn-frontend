import { MongoClient, Logger } from 'mongodb';
import assert from 'assert';


export const status = (authId) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect('mongodb://localhost:27017/Team21DB', (err, db) => {
      // Set debug level
      Logger.setLevel('error');

      assert.equal(err, null);
      console.log('Successfully connected to MongoDB.');

      let output = '';

      // first find author
      db.collection('author').findOne({ _id: authId })
        .then((authObj) => {
          // iterate through his manuscripts
          authObj.manuscripts.forEach((manRef, idx, arr) => {
            // report only on those for whom he's primary author
            if (manRef.ord === 1) {
              // info relating to that manuscript
              db.manuscript.findOne({ _id: manRef.man_id })
                .then((manObj) => {
                  const infoStr = `${manObj.title} ${manObj._id} ${manObj.status}\n`;
                  output += infoStr;
                });
            }
          });
          // finally return all the info
          resolve(output);
        })
        .catch((error) => {
          reject('oops, there has been an error');
        });
    });
  });
};
