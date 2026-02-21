import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameSkeleton(){
    return (
        <Card.Root>
            <Skeleton width="100%" aspectRatio="16/9" borderRadius={10} overflow='hidden'/>
            <Card.Body>
                <SkeletonText/>
            </Card.Body>
        </Card.Root>
    )
}

export default GameSkeleton;