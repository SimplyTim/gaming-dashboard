import { Fragment } from 'react';
import {Text, SimpleGrid} from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameSkeleton from './GameSkeleton';

function GameGrid(){
    const {games, error, isLoading} = useGames();
    const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12]
    return(
        <Fragment>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl:5}} gap={10}>
                {isLoading && skeletons.map(skeleton => <GameSkeleton key={skeleton}/>)}
                {games.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </Fragment>
    )
}

export default GameGrid;