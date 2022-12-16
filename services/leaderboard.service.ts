import firebase from "../utils/firebase";
import Leaderboard from "../types/leaderboard.type";
import { ref, set, remove, get, child, query, orderByChild, limitToLast } from 'firebase/database';

class LeaderboardDataService {
     async getTopTenStreaks() {
        const db = ref(firebase, "/leaderboard");
        const topStreaks = query(db, orderByChild('streak'));
        const topTenStreaks = query(topStreaks, limitToLast(10));

        return await get(topTenStreaks);
    }

  async get(key: string) {
    const db = ref(firebase);
    get(child(db, "leaderboard/" + key)).then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          console.log("No data available");
          return null;
        }
      }).catch((error) => {
        console.error(error);
        return null;
      });
  }

  update(key: string, value: Leaderboard) {
    const db = ref(firebase, "leaderboard/" + key);
    set(db, value);
  }

  delete(key: string) {
    const db = ref(firebase, "leaderboard/" + key);
    remove(db);
  }
}

export default new LeaderboardDataService();