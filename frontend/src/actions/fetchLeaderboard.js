export function fetchLeaderboard() {
    
    return () => {
        fetch(`http://localhost:3001/api/v1/users`, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify()
          })
          .then(response => response.json())
          .then(data => console.log(data));
    };
  }