import { Badge } from '@chakra-ui/react';

interface GameScoreProps{
    score: number;
}

function GameScore({ score }: GameScoreProps) {
    var colorPalette = score > 90 ? 'purple' : score > 75 ? 'green' : score > 60 ? 'yellow' : score > 40 ? 'orange' : 'red'
    return (
        <Badge fontSize='14px' colorPalette={colorPalette}>{score}</Badge>
    )
}

export default GameScore;