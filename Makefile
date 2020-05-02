SRC=chrome/*
TOPFILES=manifest.json chrome.manifest LICENSE

XPI_NAME=copy-message-ref@kamaladafrica

.PHONY: clean

all: $(XPI_NAME)

$(XPI_NAME): $(SRC) $(TOPFILES)
	zip -r $@ $^

clean:
	rm *.xpi
