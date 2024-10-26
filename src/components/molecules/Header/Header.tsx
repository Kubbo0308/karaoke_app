import {
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
    <Flex
      justifyContent="space-between"
      alignItems="center"
      boxShadow="md"
      h="50px"
      px={5}
      mb={6}
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
          <MenuItem>
            <Link
              as={NextLink}
              href={PAGE_INFO.COOPERATION.path}
              _hover={{ textDecoration: "none", opacity: 0.5 }}
            >
              協力ビンゴ
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              as={NextLink}
              href={PAGE_INFO.MATCH.path}
              _hover={{ textDecoration: "none", opacity: 0.5 }}
            >
              対戦ビンゴ
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              as={NextLink}
              href={PAGE_INFO.MEDLEY.path}
              _hover={{ textDecoration: "none", opacity: 0.5 }}
            >
              ヒットソングメドレーチャレンジ
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
