
import React from 'react'
import { Skeleton,Stack } from "@chakra-ui/react";
const Skeletonbar = () => {
  return (
      <div style={{width:"80%",margin:"auto"}}>
          <Stack>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
          </Stack>
      </div>
  );
}

export default Skeletonbar