// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: api/book/v1/book.proto

package book

import (
	"bytes"
	"errors"
	"fmt"
	"net"
	"net/mail"
	"net/url"
	"regexp"
	"sort"
	"strings"
	"time"
	"unicode/utf8"

	"google.golang.org/protobuf/types/known/anypb"
)

// ensure the imports are used
var (
	_ = bytes.MinRead
	_ = errors.New("")
	_ = fmt.Print
	_ = utf8.UTFMax
	_ = (*regexp.Regexp)(nil)
	_ = (*strings.Reader)(nil)
	_ = net.IPv4len
	_ = time.Duration(0)
	_ = (*url.URL)(nil)
	_ = (*mail.Address)(nil)
	_ = anypb.Any{}
	_ = sort.Sort
)

// Validate checks the field values on GetBookRequest with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *GetBookRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on GetBookRequest with the rules defined
// in the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in GetBookRequestMultiError,
// or nil if none found.
func (m *GetBookRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *GetBookRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Name

	if len(errors) > 0 {
		return GetBookRequestMultiError(errors)
	}

	return nil
}

// GetBookRequestMultiError is an error wrapping multiple validation errors
// returned by GetBookRequest.ValidateAll() if the designated constraints
// aren't met.
type GetBookRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m GetBookRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m GetBookRequestMultiError) AllErrors() []error { return m }

// GetBookRequestValidationError is the validation error returned by
// GetBookRequest.Validate if the designated constraints aren't met.
type GetBookRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e GetBookRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e GetBookRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e GetBookRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e GetBookRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e GetBookRequestValidationError) ErrorName() string { return "GetBookRequestValidationError" }

// Error satisfies the builtin error interface
func (e GetBookRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sGetBookRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = GetBookRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = GetBookRequestValidationError{}

// Validate checks the field values on GetBookResponse with the rules defined
// in the proto definition for this message. If any rules are violated, the
// first error encountered is returned, or nil if there are no violations.
func (m *GetBookResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on GetBookResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// GetBookResponseMultiError, or nil if none found.
func (m *GetBookResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *GetBookResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Format

	if len(m.GetName()) < 1 {
		err := GetBookResponseValidationError{
			field:  "Name",
			reason: "value length must be at least 1 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(errors) > 0 {
		return GetBookResponseMultiError(errors)
	}

	return nil
}

// GetBookResponseMultiError is an error wrapping multiple validation errors
// returned by GetBookResponse.ValidateAll() if the designated constraints
// aren't met.
type GetBookResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m GetBookResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m GetBookResponseMultiError) AllErrors() []error { return m }

// GetBookResponseValidationError is the validation error returned by
// GetBookResponse.Validate if the designated constraints aren't met.
type GetBookResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e GetBookResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e GetBookResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e GetBookResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e GetBookResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e GetBookResponseValidationError) ErrorName() string { return "GetBookResponseValidationError" }

// Error satisfies the builtin error interface
func (e GetBookResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sGetBookResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = GetBookResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = GetBookResponseValidationError{}