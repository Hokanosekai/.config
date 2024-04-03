set fish_greeting

source "$HOME/.config/fish/aliases.fish"

set fzf_preview_dir_cmd exa --all --color=always
set fzf_fd_opts --hidden --exclude=.git
set fzf_git_log_format "%H %s"

set -U fish_user_paths "$HOME/.cargo/bin/" $fish_user_paths

set LC_ALL C 

set NIX_PKGS "https://github.com/NixOS/nixpkgs/archive/8a3eea054838b55aca962c3fbde9c83c102b8bf2.tar.gz"
set NIX_PATH "nixpkgs=https://github.com/NixOS/nixpkgs/archive/8a3eea054838b55aca962c3fbde9c83c102b8bf2.tar.gz"

function cheat
    curl -m 10 "http://cheat.sh/$argv" 2>/dev/null
end

function enableCorpGitlab
    set domain "corploc"
    set token "5a014649-6235-4775-a5fb-82cb50affc2f"
    set ipv4addr 91.166.221.185
    set ipv6addr 2a01:e0a:1b7:6e40::64b1:7c13
    echo -n (set_color yellow)"Updating DuckDNS: "(set_color normal)
    echo "https://www.duckdns.org/update?domains=$domain&token=$token&ip=$ipv4addr&ipv6=$ipv6addr"
    curl -s "https://www.duckdns.org/update?domains=$domain&token=$token&ip=$ipv4addr&ipv6=$ipv6addr" -o ~/duckdns/duckdns.log
    echo -n (set_color green)"GitLab is enabled. Don't forget to disable-git ;)"(set_color normal)

end


function disableCorpGitlab

    set ipv6addr 2a01:e0a:1b7:6e40::64b1:7c13
    set fakepv6addr 2606:4700:4400::ac40:995
    set fakeipv4addr 1.1.1.1
    curl -s "https://www.duckdns.org/update?domains=$domain&token=$token&ip=$fakeipv4addr&ipv6=$fakepv6addr" -o ~/duckdns/duckdns.log
    echo -n (set_color red)"GitLab disabled."(set_color normal)
    
end

if status is-interactive
    # Commands to run in interactive sessions can go here
end

# Generated for envman. Do not edit.
test -s ~/.config/envman/load.fish; and source ~/.config/envman/load.fish
