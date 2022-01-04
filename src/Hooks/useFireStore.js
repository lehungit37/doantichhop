import React, { useState } from "react";
import firebase from "../Firebase/config";
const db = firebase.firestore();
const useFireStore = (collection, condition) => {
  const [document, setDocument] = useState();
  React.useEffect(() => {
    let collectionRef = db.collection(collection);

    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        return;
      }
      collectionRef = collectionRef.where(
        condition.fieldName,
        condition.operator,
        condition.compareValue
      );
    }

    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setDocument(documents);
    });

    return unsubscribe;
  }, [collection, condition]);

  return document;
};

export default useFireStore;
