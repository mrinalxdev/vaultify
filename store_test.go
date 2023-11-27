package main

import (
	"bytes"
	"testing"
)

func TestPathTransform (t *testing.T) {
	key := "bestpicture"
	pathKey := CASPathTransformFunc(key)
	expectedPathname := "71056/ad8aa/24742/ea41e/a36fa/2e345/2a316/36e82"
	expectedOriginalKey := "71056ad8aa24742ea41ea36fa2e3452a31636e82"

	if pathKey.Pathname != expectedPathname {
		t.Errorf("have %s want %s", pathKey.Pathname, expectedPathname)
	}

	if pathKey.Original != expectedPathname {
		t.Errorf("have %s want %s", pathKey.Original, expectedOriginalKey)
	}
}

func TestStore(t *testing.T) {
	opts := StoreOpts{
		PathTransformFunc: CASPathTransformFunc,
	}
	s := NewStore(opts)

	data := bytes.NewReader([]byte("some jpg bytes"))
	if err := s.writeStream("myspecialpicture", data); err != nil {
		t.Error(err)
	}
}