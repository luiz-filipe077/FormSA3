import { extendTheme } from "@chakra-ui/react";

export const global = extendTheme
(
{
        styles:
        {
            global:
            {
                "html,body":
                {
                    fontSize:'30px', 
                    fontFamily: 'arial'
                }
            }
        }
    }
)