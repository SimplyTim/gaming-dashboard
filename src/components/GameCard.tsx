import { Image, Heading, Card, HStack } from '@chakra-ui/react';
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList';
import GameScore from './GameScore';

interface Props {
    game: Game;
}

function GameCard({ game }: Props) {
    return (
        <Card.Root borderRadius={10} overflow='hidden'>
            <Image src={game.background_image}/>
            <Card.Body>
                <Heading fontSize='l'>{game.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                    <GameScore score={Number(game.metacritic)}/>
                </HStack>
            </Card.Body>
        </Card.Root>
    );
}

export default GameCard;