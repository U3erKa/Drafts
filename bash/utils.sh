# diff 2 folders
GIT_CONFIG_NOSYSTEM=1 HOME='' XDG_CONFIG_HOME='' USERPROFILE='' git -c core.safecrlf=false diff --src-prefix=a/ --dst-prefix=b/ --ignore-cr-at-eol --irreversible-delete --full-index --no-index --text $SRC_FOLDER $DST_FOLDER
