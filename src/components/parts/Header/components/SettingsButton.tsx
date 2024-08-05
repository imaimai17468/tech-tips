import { CLIENT_PATHS } from "@/constants/clientPaths";
import { replaceIDinPath } from "@/utils/replaceIDinPath";
import { ActionIcon, Menu } from "@mantine/core";
import { ExitIcon, GearIcon, Pencil1Icon, PersonIcon } from "@radix-ui/react-icons";

type Props = {
  href?: string;
  userName: string;
  userID: string;
};

export const SettingsButton: React.FC<Props> = ({ userName, userID }) => {
  return (
    <Menu offset={15} withArrow position="bottom-end" transitionProps={{ transition: "rotate-left", duration: 150 }}>
      <Menu.Target>
        <ActionIcon variant="light">
          <GearIcon />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item component="a" href={replaceIDinPath(CLIENT_PATHS.USER, userID)}>
          {userName}
        </Menu.Item>

        <Menu.Label>Settings</Menu.Label>
        <Menu.Item leftSection={<PersonIcon />} component="a" href={CLIENT_PATHS.SETTINGS_PROFILE}>
          Profile
        </Menu.Item>
        <Menu.Item leftSection={<Pencil1Icon />} component="a" href={CLIENT_PATHS.SETTINGS_TIPS}>
          Tips
        </Menu.Item>

        <Menu.Label>Account</Menu.Label>
        <Menu.Item leftSection={<ExitIcon />} component="a" href={CLIENT_PATHS.TOP}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
