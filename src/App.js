import React, { useContext, useState } from "react";
import axios from "axios";
import { Card, Image, Input, Button, Grid, Icon } from "semantic-ui-react";
import { AppContext } from "./AppContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./page.css";
import "./App.css";

const ParentComponent = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { addToWatchlist, removeFromWatchlist, watchlist } =
    useContext(AppContext);
  const searchAnime = async () => {
    if (query.trim() === "") return;
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${query}&sfw`
      );
      setSearchResults(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const isAnimeInWatchlist = (anime) => {
    return watchlist.some((item) => item.mal_id === anime.mal_id);
  };

  const renderActionButton = (anime) => {
    if (isAnimeInWatchlist(anime)) {
      return (
        <Button color="red" onClick={() => removeFromWatchlist(anime.mal_id)}>
          Remove from Watchlist
        </Button>
      );
    } else {
      return (
        <Button color="green" onClick={() => addToWatchlist(anime)}>
          Add to Watchlist
        </Button>
      );
    }
  };

  return (
    <div className="grid">
      <Grid verticalAlign="middle" textAlign="center" columns={"equal"}>
        <Grid.Column>
          <Image
            style={{ padding: "10px" }}
            verticalAlign="middle"
            src="https://us-tuna-sounds-images.voicemod.net/41e56e6c-b8cd-4cec-a287-10f05fc02e1d-1687027894062.jpg"
            circular
            size="small"
          />
          <h2
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              fontStyle: "italic",
              fontFamily: "Helvetica, sans-serif",
            }}
          >
            Anime Neko
          </h2>
          <Link to="/watchlist" style={{ color: "#123c69", fontSize: "20px" }}>
            <Icon name="list alternate" />
            Watchlist
          </Link>
          <h2>Search Anime</h2>
          <Input
            placeholder="Enter anime name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            action={<Button onClick={searchAnime}>Search</Button>}
            style={{ padding: "10px" }}
          />
          <Card.Group style={{ display: "flex", justifyContent: "center" }}>
            {searchResults.map((anime) => (
              <Card key={anime.mal_id} className="cards">
                <Card.Content>
                  <a href={anime.url}>
                    <Image src={anime.images.jpg.image_url} alt={anime.title} />
                  </a>
                </Card.Content>

                <Card.Content extra>
                  <Card.Header>{anime.title}</Card.Header>
                </Card.Content>
                <Card.Content extra>{renderActionButton(anime)}</Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ParentComponent;
