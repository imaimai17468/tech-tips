import { CLIENT_PATHS } from "@/constants/clientPaths";
import { replaceIDinPath } from "@/utils/replaceIDinPath";
import { ActionIcon, Menu } from "@mantine/core";
import { DesktopIcon, GearIcon, Pencil1Icon, PersonIcon } from "@radix-ui/react-icons";

type Props = {
  userID: string;
};

export const SettingsButton: React.FC<Props> = ({ userID }) => {
  return (
    <Menu offset={15} withArrow position="bottom-end" transitionProps={{ transition: "rotate-left", duration: 150 }}>
      <Menu.Target>
        <ActionIcon variant="light" aria-label="Settings menu">
          <GearIcon />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item leftSection={<DesktopIcon />} component="a" href={replaceIDinPath(CLIENT_PATHS.USER, userID)}>
          Your Page
        </Menu.Item>

        <Menu.Label>Settings</Menu.Label>
        <Menu.Item leftSection={<PersonIcon />} component="a" href={CLIENT_PATHS.SETTINGS_PROFILE}>
          Profile
        </Menu.Item>
        <Menu.Item leftSection={<Pencil1Icon />} component="a" href={CLIENT_PATHS.SETTINGS_TIPS}>
          Tips
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
