import {
  Box,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import NextLink from "next/link";
import { PAGE_INFO } from "@/const";

export const Header = () => {
  return (
    <Box boxShadow="md" h="50px" px={5} mb={6}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        h="100%"
        maxW="768px"
        mx="auto"
      >
        <Link
          as={NextLink}
          href={PAGE_INFO.HOME.path}
          _hover={{ textDecoration: "none", opacity: 0.5 }}
        >
          <Text fontWeight={800} fontSize="18px">
            カラオケゲーム
          </Text>
        </Link>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<GiHamburgerMenu />}
            variant="outline"
          />
          <MenuList>
            <Link
              as={NextLink}
              href={PAGE_INFO.COOPERATION.path}
              _hover={{ textDecoration: "none", opacity: 0.5 }}
            >
              <MenuItem>協力ビンゴ</MenuItem>
            </Link>
            <Link
              as={NextLink}
              href={PAGE_INFO.MATCH.path}
              _hover={{ textDecoration: "none", opacity: 0.5 }}
            >
              <MenuItem>対戦ビンゴ</MenuItem>
            </Link>
            <Link
              as={NextLink}
              href={PAGE_INFO.MEDLEY.path}
              _hover={{ textDecoration: "none", opacity: 0.5 }}
            >
              <MenuItem>ヒットソングメドレーくじ</MenuItem>
            </Link>
            <Link
              as={NextLink}
              href={PAGE_INFO.JOHNNYS_ROULETTE.path}
              _hover={{ textDecoration: "none", opacity: 0.5 }}
            >
              <MenuItem>ジャニーズルーレット</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};
