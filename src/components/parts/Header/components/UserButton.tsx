"use client";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { replaceIDinPath } from "@/utils/replaceIDinPath";
import { Avatar, Menu, UnstyledButton } from "@mantine/core";
import { ExitIcon, Pencil1Icon, PersonIcon } from "@radix-ui/react-icons";

type Props = {
  href?: string;
  userName: string;
  userID: string;
};

export const UserButton: React.FC<Props> = ({ href, userName, userID }) => {
  return (
    <Menu offset={15} withArrow position="bottom-end" transitionProps={{ transition: "rotate-right", duration: 150 }}>
      <Menu.Target>
        <UnstyledButton>
          <Avatar src={href} alt="profile-icon" />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item component="a" href={replaceIDinPath(CLIENT_PATHS.USER, userID)}>
          {userName}
        </Menu.Item>

        <Menu.Label>Settings</Menu.Label>
        <Menu.Item leftSection={<PersonIcon />} component="a" href={CLIENT_PATHS.SETTINGS_PROFILE}>
          Profile
        </Menu.Item>
        <Menu.Item leftSection={<Pencil1Icon />}>Tips</Menu.Item>

        <Menu.Label>Account</Menu.Label>
        <Menu.Item leftSection={<ExitIcon />}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
